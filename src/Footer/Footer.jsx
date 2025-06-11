
import { useState } from "react";
import logo from '../assets/logo.jpeg'

// react icons
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerData } from "../contents/content";

const ResponsiveFooter = ({text}) => {
      const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };
    return (
        <footer className="bg-lime-900  shadow-md md:rounded-xl rounded-t-xl w-full p-6 sm:p-9 mt-5">
            <div
                className="flex justify-around flex-col md:flex-row gap-16 md:gap-0 items-center">
                <div className="">
                    <img src={logo} alt="logo"
                         className="w-[50px] mb-[20px] rounded-full"/>
                    <div className="flex flex-col gap-[20px] text-white">
                                            <span><a href="https://maps.app.goo.gl/xq3SwtFRZ7D17e3r6" target="_blank"
                                                className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer hover:text-blue-400">
                                                <IoLocationOutline className="text-[1.2rem] "/>
                                               {footerData?.address}
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineEmail className="text-[1.1rem]"/>
                                                {footerData?.email}
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineLocalPhone className="text-[1.1rem]"/>
                                               {footerData?.number}
                                            </a></span>
                    </div>
                    <div className="flex flex-row gap-5 py-3 text-lg text-white ">
                     <a className="hover:text-blue-400" target="_blank" href={footerData?.socialLink?.facebook}>
                     <FaFacebook /></a>
                     
                      <a className="hover:text-blue-400" target="_blank" href={footerData?.socialLink?.twitter}>
                      <FaXTwitter/>
                      
                      </a>
                      <a className="hover:text-blue-400" target="_blank" href={footerData?.socialLink?.instagram}>
                      <FaInstagram/>
                      </a>
                      <a className="hover:text-blue-400" target="_blank" href={footerData?.socialLink?.linkedin}>
                      <FaLinkedin/>
                      </a>
                
                      </div>
                </div>
                <div id="contact" className="md:w-1/2 md:border-l-2 border-stone-400 md:pl-20">
                    <h3 className="text-[1.2rem] font-semibold text-[#eeeeee] mb-2">Contact With Us</h3>
                    <div className="flex gap-[2px] w-full  flex-col text-[#eeeeee] relative">
                        <label className="text-[0.9rem]">Your Email</label>
                        <input type="email"
                               className="py-3 px-4 pr-[90px] w-full rounded-md border border-gray-400  outline-none"
                               placeholder="Email address"/>
                    </div>
                          <div className="w-full pt-2">
            <label
                htmlFor="description"
                className="font-[400] text-[15px] text-[#eeeeee]" >
                Description
            </label>
            <textarea
                id="name"
                placeholder="Write here"
                className="focus:border-[#fc8787f3] border outline-none px-4 w-full mt-1 min-h-[100px] bg-transparent rounded-md py-3 border-gray-400 transition-colors duration-300 text-white"
            />
            
        </div>
         <button  onClick={() => { document.getElementById('my_modal_3').showModal() }}
                  className="px-4 py-2 mt-2 w-full rounded-md bg-[#fc8787f3] hover:bg-[#fc8787c5] text-white cursor-pointer">Submit </button>
                </div>
            </div>
             <div className="border-t border-gray-200 pt-[20px] mt-2 flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p className="text-[0.8rem] sm:text-[0.9rem] text-stone-300 text-center">© {new Date().getFullYear()} Mukto Pathagar. All Rights
                    Reserved. <br /> (Developed by  <span className="underline text-white cursor-pointer"><a href="https://github.com/nmcsakib" target="_blank">SAKIB</a></span>) </p>
                </div>
                <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Sorry! This Option is under Construction.</h3>
    <p className="py-4">Please call here:  <span
      onClick={handleCopy}
      className="cursor-pointer text-blue-600 hover:underline relative"
      title={copied ? 'Copied!' : 'Click to copy'}
    >
      {text}
    </span>  to contact.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>  
{
    copied && alert('Number Copied successfully.')
}
        </footer>
    );
};

export default ResponsiveFooter;
                    