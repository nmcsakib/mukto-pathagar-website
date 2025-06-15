
import React from "react";

// react icons
import {BiSolidLeaf} from "react-icons/bi";
import {FaFire} from "react-icons/fa";

const Book = ({book}) => {

    return (
        <div className="w-full bg-white dark:bg-slate-800 boxShadow rounded-md min-h-[450px]">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-[1.4rem] dark:text-[#abc2d3] font-semibold">{book?.bookName}</h2>
                <div className="flex items-center gap-[5px]">
                    <p
                        className="rounded-xl p-1 text-xs bg-green-300 text-black cursor-pointer">{book?.type}</p>
                     <p
                        className="rounded-xl p-1 text-[8px] bg-red-600 text-black cursor-pointer">{book?.pages} pages</p>
                </div>
            </div>
            <img
                src="https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg?t=st=1722622233~exp=1722625833~hmac=92966e9ba3da795adaeb9da7587107d51eaff15f0424bf9628d286a28b2486b6&w=1060"
                alt="icecream"
                className="w-full"
            />

            <div className="p-4">
                <p className="text-[1rem] dark:text-[#abc2d3]/90 text-gray-700"></p>

                <div
                    className="mt-5 flex 640px:flex-row flex-col gap-[15px] 640px:gap-[5px] 640px:items-center justify-between w-full">
                    <h3 className="text-[1.4rem] dark:text-[#abc2d3] font-semibold flex items-center gap-[4px]">
                        $13.90

                        <del className="text-[1rem] dark:text-[#abc2d3] text-red-500 font-[300]">
                            $18.90
                        </del>
                    </h3>

                    <button
                        className="py-2 px-6 border dark:border-slate-600 dark:text-[#abc2d3] border-gray-600 text-gray-700 rounded-md">Order
                        now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Book;
                    