import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLocation, useParams } from 'react-router-dom';
import BookCategory from '../BookCategory/BookCategory';
import booksDB from '../Database/booksDB.json'
import { useTranslation } from 'react-i18next';
import Searchbar from '../components/SearchBar/SearchBar';


const AllBooks = () => {

  const { t } = useTranslation();

  const [selectedBook, setSelectedBook] = useState(null);
  const [showBooks, setShowBooks] = useState([...booksDB].slice(0, 5));
  const [searchedBook, setSearchedBook] = useState('')
  const { books } = useParams();
  const link = useLocation();

  console.log(showBooks);

  const handleSeeMore = () =>{
    
    setShowBooks([...booksDB])
  }

  useEffect(() => {
    setShowBooks([...booksDB])
  },[])

  useEffect(() => {
    const searched = booksDB.filter(book => (book.BookName.toLowerCase()).includes(searchedBook.toLowerCase()))
    console.log([searched, searched]);
    searchedBook !== '' ? setShowBooks([...searched]) : setShowBooks([...booksDB].slice(0, 5))
  },[searchedBook])


  if (books == "All-Books") {
    return (
      <div className='container mx-auto px-8 min-h-screen'>

        <SectionTitle pathname={link.pathname} title={t("AllBooks")} />
        <div className="overflow-x-auto font-mono flex flex-col justify-center items-center gap-4">
          <Searchbar setSearchedBook={setSearchedBook}/>
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
                showBooks.map((book, i) => <>
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">

                        <div>
                          <div className="font-bold">{book?.BookName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {book?.Writer}
                    </td>
                    <td>{book?.Publication}</td>
                    <th>
                      <button onClick={() => {
                        setSelectedBook(book?.BookName);
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
          {searchedBook === '' && showBooks.length < 6 && <button onClick={handleSeeMore} className="btn btn-primary">See More</button>}
        </div>
      </div>
    )

  } else {

    return (
      <BookCategory categoryName={books} />
    )
  }

};

export default AllBooks;