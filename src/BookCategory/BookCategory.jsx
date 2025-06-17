import { useEffect, useState, useMemo } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLocation, useNavigate } from 'react-router-dom';

const BookCategory = ({ categoryName }) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.SERVER}/All-books`)
      .then(res => res.json())
      .then(data => setAllBooks(data[0]));
  }, []);

  const result = useMemo(() => {
    const counts = allBooks.reduce((acc, book) => {
      let key;
      if (categoryName === "Publications") {
        key = book.publications;
      } else if (categoryName === "Writers") {
        key = book.writer;
      } else {
        key = "Others";
      }

      if (key) {
        acc[key] = (acc[key] || 0) + 1;
      }

      return acc;
    }, {});

    return Object.entries(counts).map(([category, totalBook]) => ({
      category,
      totalBook
    }));
  }, [allBooks, categoryName]);

  const navigate = useNavigate();
  const link = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='container mx-auto px-8  min-h-screen'>
      <SectionTitle pathname={link.pathname} title={categoryName} />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>No.</th>
              <th>{categoryName}</th>
              <th>Books We Have</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {result.map((category, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{category.category}</td>
                <td>{category.totalBook}</td>
                <td>
                  <button
                    onClick={() => handleNavigation(`/Books/${categoryName}/${category.category}`)}
                    className="btn btn-sm btn-success"
                  >
                    All Books
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCategory;
