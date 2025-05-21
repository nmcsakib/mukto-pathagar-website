import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LangToggle = () => {
    const [lang, setLang] = useState(true);
    const toggleLang = () => {
        setLang(!lang)
    }
    return (
         <button
              onClick={toggleLang}
              aria-label="Toggle Dark Mode"
              className="btn rounded-full bg-stone-400 text-white hover:btn-outline hover:bg-transparent hover:text-stone-600 flex-end"
            ><FaGlobe/>
              {lang === true ? <div><p>ENG</p></div> : <div><p>BAN</p></div>}
            </button>
    );
};

export default LangToggle;