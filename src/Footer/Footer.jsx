
import React from "react";
import logo from '../assets/logo.jpeg'

// react icons
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";

const ResponsiveFooter = () => {
    return (
        <footer className="bg-stone-200 shadow-md rounded-xl w-full p-6 sm:p-9 mt-5">
            <div
                className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[25%] ">
                    <img src={logo} alt="logo"
                         className="w-[50px] mb-[20px] rounded-full"/>
                    <div className="flex flex-col gap-[20px] text-[#fc8787f3]">
                                            <span><a href="https://maps.app.goo.gl/xq3SwtFRZ7D17e3r6" target="_blank"
                                                className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer hover:text-blue-400">
                                                <IoLocationOutline className="text-[1.2rem] "/>
                                                Kazirhat, Begumgonj, Noakhali
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineEmail className="text-[1.1rem]"/>
                                                muktopathagar@gmail.com
                                            </a></span>
                        <span><a
                            className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                                                <MdOutlineLocalPhone className="text-[1.1rem]"/>
                                                +8801301437873
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

                <div id="contact" className="w-full">
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Contact With Us</h3>
                    <div className="flex gap-[2px] w-full sm:w-[40%] flex-col text-[#424242] relative">
                        <label className="text-[0.9rem]">Your Email</label>
                        <input type="email"
                               className="py-3 px-4 pr-[90px] w-full rounded-md border border-[#fc8787f3]  outline-none"
                               placeholder="Email address"/>
                    </div>
                          <div className="w-full sm:w-[40%] pt-2">
            <label
                htmlFor="description"
                className="font-[400] text-[15px] text-text"
            >
                Description
            </label>
            <textarea
                id="name"
                placeholder="Write here"
                className="border-[#fc8787f3] border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"
            />
            
        </div>
         <button
                            className="px-4 py-2 mt-2 w-full sm:w-[40%] rounded-md bg-[#fc8787f3] hover:bg-[#fc8787c5] text-white cursor-pointer">Submit
                        </button>
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
                    