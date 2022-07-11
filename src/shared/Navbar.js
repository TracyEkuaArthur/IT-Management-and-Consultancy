import React from "react";
import {BsWindows} from "react-icons/bs";
import {BiRightArrowAlt} from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-20 border-2 w-screen flex justify-between">
      <div className="flex mx-20 mt-3">
      <BsWindows color="red" size={35} className="mx-5"/> <span className="text-3xl font-bold mx-2">Tracy</span> <span className="text-3xl text-red-500 font-bold">Tech</span>
      </div>
      <div className="w-1/2 py-6 mx-10 ">
        <ul className="flex justify-evenly">
          <li className="text-xl text-gray-500"><Link to="/">Home</Link></li>
          <li className="text-xl text-gray-800 font-semibold"><Link to="/">Company</Link></li>
          <li className="text-xl text-gray-500"><Link to="/">IT Solutions</Link></li>
          <li className="text-xl text-gray-500"><Link to="/">Case Studies</Link></li>
          <li className="text-xl text-gray-500"><Link to="/service">Service</Link></li>
          <li className="text-xl text-gray-500"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="border-2 h-14 w-48 text-xl mt-3 font-semibold flex rounded border-red-500 mr-10">
        <p className="mx-4 mt-3">Contact Now</p> <BiRightArrowAlt className="mt-5"/>
      </div>
    </div>
  );
};

export default Navbar;
