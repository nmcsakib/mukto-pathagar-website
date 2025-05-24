import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LangToggle = () => {
  const [lang, setLang] = useState(true);
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();
  const toggleLang = () => {
    lang ? setLanguage('en') : setLanguage('bn')
    setLang(!lang)
    i18n.changeLanguage(language)
  }
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle Dark Mode"
      className="flex justify-around items-center  text-base-content border-none bg-transparent hover:text-stone-600 mr-3 gap-3 cursor-pointer"
    ><FaGlobe />
      {lang === true ? <div><p>বাংলা</p></div> : <div><p>ENG</p></div>}
    </button>
  );
};

export default LangToggle;