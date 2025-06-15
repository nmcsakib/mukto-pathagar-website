
// react icons
import { CiMenuFries } from "react-icons/ci";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg'
import LangToggle from "../Lang/LangToggle";
import Button from "./Button";
import SidebarSection from "./SidebarSection";
import { BiMenu } from "react-icons/bi";

const ResponsiveNavbar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {

    navigate(path);
  };


  const DropdownMenu = ({ label, items }) => (
    <li className="relative group cursor-pointer transition-all duration-500 capitalize hover:text-[#3B9DF8] flex items-center gap-[3px]">
      <Button btnName={label} arrow={true} />
      <article className="absolute top-[40px] -left-2 z-[-1] group-hover:z-30 translate-y-[-20px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 bg-stone-300 rounded-md boxShadow">
        <ul className="flex flex-col text-[#424242]">
          {items.map(({ label, path }) => (
            <NavLink key={label} to={path} className="flex items-center hover:text-black hover:bg-white hover:border-b-2 hover:border-b-gray-500 p-2 rounded-xl transition-all duration-300">
              {label}
            </NavLink>
          ))}
        </ul>
      </article>
    </li>
  );




  return (

    <section className="container mx-auto px-8 normal-font">
      {/* Drawer */}
      <div className="drawer lg:drawer-close">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side fixed top-0 left-0 z-50">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
            <SidebarSection
              title="Members"
              items={[
                { name: "Founder", path: "/members/Founder" },
                { name: "Advisior Members", path: "/members/Advisior Members" },
                { name: "Guest Members", path: "/members/Guest Members" },
                { name: "Life time Members", path: "/members/Life time Members" },
                { name: "Committee Members", path: "/members/Committee Members" },
                { name: "General Members", path: "/members/General Members" },
              ]}
            />

            {/* Books */}
            <SidebarSection
              title="Book List"
              items={[
                { name: "All Books", path: "/Books/All-Books" },
                { name: "Publications", path: "/Books/Publications" },
                { name: "Writers", path: "/Books/Writers" },
              ]}
            />

            {/* Events */}
            <SidebarSection
              title="Events"
              items={["2022", "2023", "2024", "2025"].map((year) => ({
                name: `${year} All Programs`,
                path: `/events/${year}`,
              }))}
            />

            {/* Contact and Logo */}
            <li className="mt-4 flex justify-between flex-row items-center">
              <a
                onClick={() => {
                  document.getElementById('my-drawer').checked = false;
                }}
                href="#contact"
              >
                <Button arrow={false} btnName="Contact" />
              </a>
              <img onClick={() => handleNavigation('/')} className="cursor-pointer w-14 rounded-full" src={logo} alt="logo" />
            </li>
          </ul>

        </div>
      </div>
      <div className='pt-5'>

        {/* Navbar */}
        <nav className="flex items-center justify-between w-full relative h-auto">
          <div className="flex-1">
            <h2 onClick={() => handleNavigation('/')} className="cursor-pointer font-semibold md:text-2xl md:block hidden">Mukto Pathagar</h2>
                        <img onClick={() => handleNavigation('/')} className="cursor-pointer w-14 rounded-full md:hidden" src={logo} alt="" />
          </div>

          {/* nav links */}
          <ul className="justify-center items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden mr-5">

            <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
              <NavLink to={'/about'}>
                <Button arrow={false} btnName={"About Us"} />
              </NavLink>
            </li>

            <DropdownMenu
              label="Members"
              items={[
                { label: 'Founder', path: '/members/Founder' },
                { label: 'Advisior Members', path: '/members/Advisior Members' },
                { label: 'Guest Members', path: '/members/Guest Members' },
                { label: 'Life time Members', path: '/members/Life time Members' },
                { label: 'Committee Members', path: '/members/Committee Members' },
                { label: 'General Members', path: '/members/General Members' },
              ]}
            />

            <DropdownMenu
              label="Book List"
              items={[
                { label: 'All Books', path: '/Books/All-Books' },
                { label: 'Publications', path: '/Books/Publications' },
                { label: 'Writers', path: '/Books/Writers' },
              ]}
            />

            <DropdownMenu
              label="Events"
              items={[
                { label: '2025 All Programs', path: '/events/2025' },
              ]}
            />

            <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
              <a href="#contact"><Button arrow={false} btnName={"Contact"} /></a>
            </li>
          </ul>
         
           <div className="flex items-center gap-[10px]">

            <LangToggle />
            <div className="drawer-content flex gap-4 items-center justify-center">
              {/* Page content here */}
              <ThemeToggle />
              <label htmlFor="my-drawer" className="drawer-button lg:hidden btnflex-end">
                <BiMenu className="text-2xl cursor-pointer" />
              </label>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ResponsiveNavbar;
