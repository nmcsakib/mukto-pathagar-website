/* eslint-disable no-unused-vars */

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './i18n.js';
import ScrollToTop from './ScrollTop.jsx'
import { useTranslation } from 'react-i18next';
import { Outlet } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();
    const currentLang = i18n.language;

  return (
    <>

      <main className={`overflow-x-hidden ${currentLang == 'bn' && 'bangla-font'}`}>

        <div className='relative w-full'>
          <Navbar />
        </div>
        <Outlet/>
      </main>
      <div>
        <div className="absolute top-0 left-0  flex place-items-center  md:before:h-[300px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']  after:h-[180px] md:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-pink-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-600 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#f64dfc] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </div>
      <Footer text={"+8801301437873"} />
      <ScrollToTop />
    </>
  )
}

export default App
