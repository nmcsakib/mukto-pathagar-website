
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Layout/Home'
import About from './About/About'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Events from './Events/Events'
import Members from './Members/Members'
import AllBooks from './AllBooks/AllBooks'

function App() {

  return (
    <>
    
    <main className="overflow-x-hidden">

          <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events/:year" element={<Events />} />
      <Route path="/members/:members" element={<Members />} />
      <Route path="/Books/:books" element={<AllBooks />} />
    </Routes>

    </main>
     <Footer/>
    </>
  )
}

export default App
