import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import BookCategory from '../BookCategory/BookCategory';
import booksDB from '../Database/booksDB.json'
import publicationDB from '../Database/PublicationsDB.json'
import writersDB from '../Database/writersDB.json'


const AllBooks = () => {

  const [selectedBook, setSelectedBook] = useState(null);
    const {books} = useParams();

    console.log(booksDB);
    
        if(books == "All-Books"){
            return(
                <div className='container mx-auto px-8 h-screen'>

            <SectionTitle title={"All Books"}/>
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
        booksDB.map((book, i) => <>
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
            setSelectedBook(book.BookName);
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
            )

        } else{

return(
    <BookCategory writersDB={writersDB} publicationData={publicationDB} category={books}/>
)
        }

};

export default AllBooks;