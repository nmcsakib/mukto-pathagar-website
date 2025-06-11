import React, {useEffect, useRef} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";

const Searchbar = ({setSearchedBook}) => {
    const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl+K or Cmd+K (for Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); // Stop browser default (like browser search)
        inputRef.current?.focus(); // Focus the input
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
    
    return (
        <div className="relative w-full sm:w-[80%] product_search_input mx-auto">
            <input onChange={(e) => setSearchedBook(e.target.value)}
                className={`px-4 py-2 border ${inputRef !== null ? 'border-red-500' : 'border-none'} rounded-md w-full pl-[40px] outline-none`}
                placeholder="বই খুজুন..." ref={inputRef}/>
            <IoIosSearch className="absolute  top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>

            {/* shortcut hint */}
            <div
                className="absolute top-[5px]   right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] rounded-md text-gray-500">
                Ctrl + K
            </div>
        </div>
    );
};

export default Searchbar;
