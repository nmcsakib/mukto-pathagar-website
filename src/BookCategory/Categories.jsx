import React, { useEffect, useState } from 'react';
import booksDB from '../Database/booksDB.json'
import { useParams } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

const Categories = () => {
    const [selectedBook, setSelectedBook] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
    const {categories, category} = useParams();
    useEffect(() => {
        const filteredPub = booksDB.filter(book => book.Publication === category);
        const filteredWri = booksDB.filter(book => book.Writer === category);
        if(categories == "Publications") {

            setFilteredBooks(filteredPub);
        } else{
            setFilteredBooks(filteredWri)
        }
    },[categories, category])
    console.log(categories);
    return (
          <div className='container mx-auto px-8 h-screen'>

            <SectionTitle title={`All Books from ${category}` }/>
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
        <th>{i+1}</th>
        <td>
          <div className="flex items-center gap-3">
           
            <div>
              <div className="font-bold">{book.BookName}</div>
            </div>
          </div>
        </td>
        <td>
          {book.Writer}
        </td>
        <td>{book.Publication}</td>
        <th>
          <button  onClick={()=>{
            setSelectedBook('hello');
            document.getElementById('my_modal_2').showModal()}} className="btn btn-ghost btn-xs">details</button>
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