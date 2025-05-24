
import React from "react";
import { BiMicrophone } from "react-icons/bi";

// react icons
import {BsSend} from "react-icons/bs";
import { FcOrganization } from "react-icons/fc";
import {IoLocationOutline} from "react-icons/io5";

const UpcomingEvent = () => {

    return (
        <div className="container mx-auto px-8 flex justify-center items-center my-10">
            <div className="bg-lime-50 w-full justify-between rounded-xl flex ">

            {/* left side */}
            <div className="flex flex-col p-[15px] md:p-[20px] gap-[18px]">
                <h1 className="text-[1rem] md:text-[1.3rem] font-bold text-green-800">
                    Upcoming Event
                </h1>
                <div className="flex items-center gap-[10px]">
                    <BiMicrophone
                        className="p-[8px] md:p-[10px] rounded-xl bg-green-100 text-green-800 text-[2rem] md:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] md:text-[1.1rem] font-[600] text-gray-800">Lekhok Adda</h4>
                        <p className="text-[0.6rem] md:text-[0.9rem] font-[400] text-gray-500">15-Dec-2020</p>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <IoLocationOutline
                        className="p-[8px] md:p-[10px] rounded-xl bg-green-100 text-green-800 text-[2rem] md:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] md:text-[1.1rem] font-[600] text-gray-800">Mukto Pathagar, Kazirhaat</h4>
                        <p className="text-[0.6rem] md:text-[0.9rem] font-[400] text-gray-500">15-June-2025</p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div
                className="flex flex-col justify-between relative w-[45%] md:w-[40%] items-center border-l-[2px] p-[15px] md:p-[20px] border-dashed border-gray-200">

                {/* top carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] md:top-[-13%] 425px:left-[-13.5%] left-[-19%] md:left-[-11.5%]"></div>

                <h4 className="text-[0.9rem] md:text-[1.3rem] font-bold text-green-800">4:00
                    PM</h4>

                <button
    className="relative inline-flex items-center px-3 md:px-8 py-1 md:py-2.5 overflow-hidden text-lg font-medium text-base-content rounded-lg bg-[#33a037] hover:text-black group hover:bg-[#33a037] cursor-pointer">
      <span
          className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
    <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">Register</span>
</button>

                <p className="text-[0.9rem] md:text-[1.1rem] text-gray-500">Price: <span
                    className="text-red-600 font-semibold">Free</span></p>

                {/* bottom carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] md:bottom-[-13%] left-[-18.5%] 425px:left-[-13.5%] md:left-[-11.5%]"></div>
            </div>
        </div>
        </div>
    );
};
export default UpcomingEvent;
            


