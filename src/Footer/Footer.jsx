
import React from "react";
import logo from '../assets/logo.jpeg'

// react icons
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";

const ResponsiveFooter = () => {
    return (
        <footer className="bg-stone-200 shadow-md rounded-xl w-full p-6 sm:p-9">
            <div
                className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[25%] ">
                    <img src={logo} alt="logo"
                         className="w-[50px] mb-[20px] rounded-full"/>
                    <div className="flex flex-col gap-[20px] text-[#3B9DF8]">
                                            <span><a
                                                className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                                                <IoLocationOutline className="text-[1.2rem]"/>
                                                Kulaura, Moulvibazar, Sylhet
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineEmail className="text-[1.1rem]"/>
                                                zenuilibrary@gmail.com
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineLocalPhone className="text-[1.1rem]"/>
                                                +8801305282768
                                            </a></span>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Services</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">UI
                            Components</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Website
                            Templates</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Icons</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Opacity
                            Palette</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Blocks</p>
                    </div>
                </div>


                <div>
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Company</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Service</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Features</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Our
                            Team</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Portfolio</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Blog</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Contact
                            Us</p>
                    </div>
                </div>


                <div className="">
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Our Social Media</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Dribble</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Behance</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Medium</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Instagram</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Facebook</p>
                        <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">Twitter</p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Contact With Us</h3>
                    <div className="flex gap-[2px] w-full sm:w-[40%] flex-col text-[#424242] relative">
                        <label className="text-[0.9rem]">Your Email</label>
                        <input type="email"
                               className="py-3 px-4 pr-[90px] w-full rounded-md border border-primary outline-none"
                               placeholder="Email address"/>

                        <button
                            className="px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0">Submit
                        </button>
                    </div>
                </div>
            </div>
             <div
                    className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600 text-center">© 2024 Mukto Pathagar. All Rights
                        Reserved. <br /> (Developed by  <span className="underline text-blue-500 cursor-pointer"><a href="https://github.com/nmcsakib" target="_blank">SAKIB</a></span>) </p>
                </div>
        </footer>
    );
};

export default ResponsiveFooter;
                    