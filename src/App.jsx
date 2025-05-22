
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Layout/Home'
import About from './About/About'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Events from './Events/Events'
import Members from './Members/Members'
import AllBooks from './AllBooks/AllBooks'
import Categories from './BookCategory/Categories'
import './i18n.js';

function App() {

  return (
    <>
    
    <main className="overflow-x-hidden">

         <div className='relative w-full'>
           <Navbar/>
         </div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events/:year" element={<Events />} />
      <Route path="/members/:members" element={<Members />} />
      <Route path="/Books/:books" element={<AllBooks />} />
      <Route path="/Books/:categories/:category" element={<Categories />} />
    </Routes>

    </main>
     <div>
           <div className="absolute top-0 left-0  flex place-items-center  md:before:h-[300px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']  after:h-[180px] md:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-pink-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-600 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#f64dfc] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
           </div>
     <Footer/>
    </>
  )
}

export default App
