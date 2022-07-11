import React from "react";
import {MdOutlineDoubleArrow} from "react-icons/md";

const ContactHeader = () => {
  return (
    <div>
      <div
        id="contactheader_"
        className="border h-full w-screen bg-blend-overlay"
      >
        <div className="h-24 w-72 mx-auto mt-96">
          <p className="text-5xl font-bold text-white">Contact Us</p>
          <div className="mt-64 w-60 h-20 flex bg-red-600 rounded" >
            <p className="text-xl font-medium text-white ml-10 mt-5">Home</p> <MdOutlineDoubleArrow size="20"color="white" className="mt-7 ml-2"/> <p className="text-xl font-medium text-white mt-5 ml-3">Pages</p>
          </div>
        </div>
 
      </div>
      <div className="h-48"></div>
     
    </div>
  );
};

export default ContactHeader;
