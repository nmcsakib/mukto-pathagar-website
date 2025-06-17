import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

const Categories = () => {
  const [selectedBook, setSelectedBook] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { categories, category } = useParams();
  const link = useLocation();


  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`${process.env.SERVER}/All-books`)
      .then(res => res.json())
      .then(data => setAllBooks(data[0]));
  }, []);


  useEffect(() => {
    const filteredPub = allBooks.filter(book => book.publications === category);
    const filteredWri = allBooks.filter(book => book.writer === category);
    if (categories == "Publications") {

      setFilteredBooks(filteredPub);
    } else {
      setFilteredBooks(filteredWri)
    }
  }, [categories, category, allBooks])
  return (
    <div className='container mx-auto px-8 min-h-screen'>

      <SectionTitle pathname={link.pathname} title={`All Books from ${category}`} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Book</th>
              <th>Writter</th>
              <th>Publication</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              filteredBooks.map((book, i) => <>
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">

                      <div>
                        <div className="font-bold">{book.bookName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {book.writer}
                  </td>
                  <td>{book.publications}</td>
                  <th>
                    <button onClick={() => {
                      setSelectedBook('hello');
                      document.getElementById('my_modal_2').showModal()
                    }} className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">{selectedBook}</h3>
                    <p className="py-4">Sorry! No details Available now.</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>

              </>)
            }
          </tbody>

        </table>
      </div>


    </div>
  );
};

export default Categories;