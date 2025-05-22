
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

     const navigate = useNavigate();

  const handleNavigation = (path) => {
  
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
        <div className="drawer lg:drawer-close">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-side fixed top-0 left-0 z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {/* About Us */}
  <li className="mb-2">
    <a onClick={() => {
      handleNavigation('/about');
      document.getElementById('my-drawer').checked = false;
    }}>
      <Button arrow={false} btnName="About Us" />
    </a>
  </li>

  {/* Members */}
  <li>
    <div className="collapse collapse-arrow bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title">
        <Button btnName="Members" />
      </div>
      <div className="collapse-content pl-4">
        <ul className="space-y-2">
          {[
            { name: "Founder", path: "/members/Founder" },
            { name: "Advisior Members", path: "/members/Advisior Members" },
            { name: "Guest Members", path: "/members/FounderGuest Members" },
            { name: "Life time Members", path: "/members/Life time Members" },
            { name: "Committee Members", path: "/members/Committee Members" },
            { name: "General Members", path: "/members/General Members" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => {
                handleNavigation(item.path);
                document.getElementById('my-drawer').checked = false;
              }}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>

  {/* Book List */}
  <li className="mt-4">
    <div className="collapse collapse-arrow bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title">
        <Button btnName="Book List" />
      </div>
      <div className="collapse-content pl-4">
        <ul className="space-y-2">
          {[
            { name: "All Books", path: "/Books/All-Books" },
            { name: "Publications", path: "/Books/Publications" },
            { name: "Writers", path: "/Books/Writers" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => {
                handleNavigation(item.path);
                document.getElementById('my-drawer').checked = false;
              }}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>

  {/* Events */}
  <li className="mt-4">
    <div className="collapse collapse-arrow bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title">
        <Button btnName="Events" />
      </div>
      <div className="collapse-content pl-4">
        <ul className="space-y-2">
          {["2022", "2023", "2024", "2025"].map((year) => (
            <li
              key={year}
              onClick={() => {
                handleNavigation(`/events/${year}`);
                document.getElementById('my-drawer').checked = false;
              }}
              className="cursor-pointer"
            >
              {year} All Programs
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>

  {/* Contact */}
   <li className="mt-4 flex justify-between flex-row items-center">
    <div>
        <a 
         onClick={() => {
                document.getElementById('my-drawer').checked = false;
              }}
        href="#contact">
      <Button arrow={false} btnName="Contact" />
    </a>
    </div>
    <div>
        <img  onClick={() => handleNavigation('/')} className="cursor-pointer w-14 rounded-full"  src={logo} alt="" />
    </div>
  </li>
    </ul>
  </div>
</div>
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
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Publications
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
     <div className="drawer-content flex gap-4 items-center justify-center">
    {/* Page content here */}
       <ThemeToggle/>
    <label htmlFor="my-drawer" className="drawer-button lg:hidden btn rounded-full bg-stone-400 text-white hover:btn-outline hover:bg-transparent hover:text-stone-600 flex-end">
     <CiMenuFries/>
    </label>
  </div>
            </div>

            {/* mobile sidebar */}
           
        </nav>
        </div>
      </section>
    );
};

export default ResponsiveNavbar;
          