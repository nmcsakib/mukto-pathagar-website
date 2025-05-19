import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const handleNavigation = (path) => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
    navigate(path);
  };

    return (
        <>
           <div className="navbar flex justify-between pt-8">
 
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li>
        <details ref={detailsRef}>
          <summary>Book List</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><button
         onClick={() => handleNavigation('/about')}
      >
        Go to About
      </button></li>
            <li><a onClick={() => handleNavigation('/')}>Link 2</a></li>
          </ul>
        </details>
      </li>
       <li>
        <details>
          <summary>Members</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Founder</a></li>
            <li><a>Advisor Members</a></li>
            <li><a>Life Time Members</a></li>
            <li><a>Guest Members</a></li>
            <li><a>Committee Members</a></li>
            <li><a>General Members</a></li>
          </ul>
        </details>
      </li>
       <li>
        <details>
          <summary>Events</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
       <li>
        <details>
          <summary>Committee</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    
    </ul>
  </div>
  <div className="">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        <span className="hidden md:inline text-xl"></span>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  </div>
        </>
    );
};

export default Navbar;