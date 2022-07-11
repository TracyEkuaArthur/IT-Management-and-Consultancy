import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BsSnow3 } from "react-icons/bs";

import { BiRightArrowAlt } from "react-icons/bi";


const HomeHeader = () => {
  return (
    <div id="homeheader_" className="border h-full w-screen bg-blend-overlay">
      <div className="h-3/4 w-5/12 mx-40 my-44">
        <h1 className="font-bold text-5xl my-3 text-white mt-20">
          IT Management
        </h1>
        <h1 className="font-bold text-5xl my-3 text-white">
          Service & Support{" "}
        </h1>
        <h1 className="font-bold text-5xl my-3 text-white">
          For Your Business.
        </h1>
        <h1 className="font-medium text-xl text-white mt-8">
          Keep your business safe & ensure high availability
        </h1>
        <div className="h-20 w-52 bg-red-600 rounded flex mt-12">
          <p className="text-xl text-white mx-4 mt-5">Find Solution</p>{" "}
          <MdOutlineKeyboardArrowRight
            size={20}
            color="white"
            className="mt-7"
          />{" "}
          <MdOutlineKeyboardArrowRight
            color="white"
            size={20}
            className="mt-7 mr-4"
          />
        </div>
      </div>
     
     
     
    </div>
  );
};

export default HomeHeader;
