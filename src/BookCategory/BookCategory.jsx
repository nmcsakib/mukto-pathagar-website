import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import publicationDB from '../Database/PublicationsDB.json'
import writersDB from '../Database/writersDB.json'

const BookCategory = ({ categoryName }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (categoryName == "Publications") {
      setCategories(publicationDB)
    }
    else if (categoryName == "Writers") {
      setCategories(writersDB)
    }
  }, [categoryName])

  console.log(categoryName);
  const navigate = useNavigate();
  const link = useLocation();
  const handleNavigation = (path) => {

    navigate(path);
  };

  return (
    <div v className='container mx-auto px-8 h-screen'>
      <SectionTitle pathname={link.pathname} title={categoryName} />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>{categoryName}</th>
              <th>Books We have</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              categories.map((category, i) => <>

                <tr>
                  <th>{i + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.totalBooks}</td>
                  <td><button onClick={() => handleNavigation(`/Books/${categoryName}/${category.name}`)} className="btn btn-sm">See All Books</button></td>
                </tr>
              </>)

            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCategory;