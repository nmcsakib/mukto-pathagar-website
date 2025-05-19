
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Layout/Home'
import About from './About/About'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <main className="container mx-auto px-8">

          <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

    </main>
  )
}

export default App
