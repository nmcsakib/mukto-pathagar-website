import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLocation, useParams } from 'react-router-dom';
import BookCategory from '../BookCategory/BookCategory';
import booksDB from '../Database/booksDB.json'
import { useTranslation } from 'react-i18next';
import Searchbar from '../components/SearchBar/SearchBar';
import Book from './Book';


const AllBooks = () => {

  const [showBooks, setShowBooks] = useState([]);
  useEffect(() => {
fetch('https://mocki.io/v1/f0c4745e-da6d-48a9-a536-751904bd3497').then(res => res.json()).then(data =>{

setShowBooks(data)
  console.log(data)
} )
  }, [])

  const { t } = useTranslation();

  // const [selectedBook, setSelectedBook] = useState(null);
  const [searchedBook, setSearchedBook] = useState('')
  const { books } = useParams();
  const link = useLocation();

  console.log(showBooks);

  const handleSeeMore = () =>{

fetch('https://mocki.io/v1/f0c4745e-da6d-48a9-a536-751904bd3497').then(res => res.json()).then(data =>{

  setShowBooks(data)
} )
  }

  useEffect(() => {
    const searched = booksDB.filter(book => (book.bookName.toLowerCase()).includes(searchedBook.toLowerCase()))
    console.log([searched, searched]);
    searchedBook !== '' ? setShowBooks([...searched]) : setShowBooks([...booksDB].slice(0, 4))
  },[searchedBook])


  if (books == "All-Books") {
    return (
      <div className='container mx-auto px-8 min-h-screen'>

        <SectionTitle pathname={link.pathname} title={t("AllBooks")} />
        <div className="overflow-x-auto font-mono flex flex-col justify-center items-center gap-4">
          <Searchbar setSearchedBook={setSearchedBook}/>
          <div className='grid grid-cols-4 gap-5'>
            {
                showBooks.map((book, i) => <div key={i}>
                 <Book book={book}/>

                </div>)
            }
          </div>
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