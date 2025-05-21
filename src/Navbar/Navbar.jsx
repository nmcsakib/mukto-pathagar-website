import React, {useRef, useState} from "react";

// react icons
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {FaDiscord} from "react-icons/fa";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {
    MdDashboardCustomize,
    MdKeyboardArrowDown,
} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import {CgIfDesign} from "react-icons/cg";
import {FaCubesStacked} from "react-icons/fa6";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg'
import LangToggle from "../Lang/LangToggle";

const ResponsiveNavbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

     const navigate = useNavigate();
  const detailsRef = useRef(null);

  const handleNavigation = (path) => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
    navigate(path);
  };


     const Button = ({btnName, arrow=true}) => {
     return(
       <summary className='btn rounded-4xl bg-stone-400 text-white hover:btn-outline hover:bg-transparent hover:text-stone-600 mr-3'>{btnName}
       {arrow === false ||  <MdKeyboardArrowDown
                        className="text-[1.5rem] text-white group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]"/>}
       </summary>
     )
  }
    return (

      <section className="container mx-auto px-8">
         <div className='pt-5'>

       <nav className="flex items-center justify-between w-full relative h-auto">
        <div>
            <img  onClick={() => handleNavigation('/')} className="cursor-pointer w-14 rounded-full"  src={logo} alt="" />
        </div>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
                    <a onClick={() => handleNavigation('/about')}><Button arrow={false} btnName={"About Us"}/></a>
                </li>

                 {/* Members button */}
                <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
                  <Button btnName={"Members"}/>

                    <article
                        className="p-6 bg-stone-300 rounded-md boxShadow absolute top-[40px] z-[-1] -left-2 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li onClick={() => handleNavigation('/members/Founder')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Founder
                                </li>
                                <li onClick={() => handleNavigation('/members/Advisior Members')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Advisior Members
                                </li>
                                <li onClick={() => handleNavigation('/members/FounderGuest Members')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Guest Members
                                </li>
                                <li onClick={() => handleNavigation('/members/Life time Members')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Life time Members
                                </li>
                                <li onClick={() => handleNavigation('/members/Committee Members')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Committee Members
                                </li>
                                <li onClick={() => handleNavigation('/members/General Members')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> General Members
                                </li>
                              
                            </ul>
                    </article>
                </li>

                {/* Book LIst */}
                <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
                   <Button btnName={"Book List"}/>
                   

                    <article
                        className="p-6 bg-stone-300 rounded-md boxShadow absolute top-[40px] z-[-1] -left-2 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li onClick={() => handleNavigation('/Books/All-Books')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> All Books
                                </li>
                                <li onClick={() => handleNavigation('/Books/Publications')}  className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Publication
                                </li>
                                <li onClick={() => handleNavigation('/Books/Writers')}  className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Writers
                                </li>
                            </ul>
                    </article>
                </li>

                {/* Events button */}
                 <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
                  <Button btnName={"Events"}/>

                    <article
                        className="p-6 bg-stone-300 rounded-md boxShadow absolute top-[40px] z-[-1] -left-2 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li onClick={() => handleNavigation('/events/2022')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> 2022 All Programs
                                </li>
                                <li onClick={() => handleNavigation('/events/2023')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> 2023 All Programs
                                </li>
                                <li onClick={() => handleNavigation('/events/2024')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> 2024 All Programs
                                </li>
                                <li onClick={() => handleNavigation('/events/2025')} className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> 2025 All Programs
                                </li>
                              
                              
                            </ul>
                    </article>
                </li>

                {/* Contact */}
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
                    <a href="#contact"><Button arrow={false} btnName={"Contact"}/></a>
                </li>

                
            </ul>

            <div className="flex flex-end items-center gap-[10px]">
            
       <LangToggle/>
       <ThemeToggle/>
                <CiMenuFries
                    className="text-[1.6rem] text-[#424242]c cursor-pointer md:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            {/* mobile sidebar */}
           
        </nav>
        </div>
      </section>
    );
};

export default ResponsiveNavbar;
          