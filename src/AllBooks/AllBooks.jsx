/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useLocation, useParams } from 'react-router-dom';
import BookCategory from '../BookCategory/BookCategory';
import { useTranslation } from 'react-i18next';
import Searchbar from '../components/SearchBar/SearchBar';
import Book from './Book';
import Pagination from '../components/Pagination/Pagination';
import dotenv from 'dotenv';
dotenv.config();


const AllBooks = () => {
  const link = useLocation();
  const { t } = useTranslation();
  const { books } = useParams();

  const [showBooks, setShowBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([])
  const [length, setLength] = useState(0)

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const [searchValue, setSearchValue] = useState("");
     const placeholders = [
        "বই খুঁজুন...", "প্রকাশনী খুঁজুন...", "লেখক খুঁজুন..." 
     ];

  useEffect(() => {
    fetch(`${process.env.SERVER}/All-books`).then(res => res.json()).then(data => {

      setShowBooks(data[0].slice(0, 8))
      setAllBooks(data[0])
      setLength(data[1])
      console.log(data)
    })
  }, [])

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setShowBooks(allBooks?.slice(startIndex, endIndex))

  }, [page])

useEffect(() => {
  const searched = allBooks.filter(book =>
    book.bookName?.toLowerCase().includes(searchValue.toLowerCase()) ||
    book.writer?.toLowerCase().includes(searchValue.toLowerCase()) ||
    book.publications?.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (searchValue.trim() !== '') {
    setShowBooks(searched);
  } else {
    setShowBooks(allBooks.slice(0, 8));
  }
}, [searchValue, allBooks]);


  if (books == "All-Books") {
    return (
      <div className='container mx-auto px-8 min-h-screen'>

        <SectionTitle pathname={link.pathname} title={t("AllBooks")} />
        <div className="overflow-x-auto flex flex-col justify-center items-center gap-4">
          <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} placeholders={placeholders}/>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
            {
              showBooks.map((book, i) => <div key={i}>
                <Book book={book} />

              </div>)
            }
          </div>
        </div>
        <Pagination length={length} page={page} setPage={setPage} />
      </div>
    )

  } else {

    return (
      <BookCategory categoryName={books} />
    )
  }

};

export default AllBooks;