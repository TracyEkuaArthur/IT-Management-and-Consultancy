import React from "react";
import {MdOutlineDoubleArrow} from "react-icons/md";

const Footer = () => {
  return (
   <div>
     <div className="h-[90vh] bg-pink-50  w-full flex justify-evenly ">
      <div className="w-64 h-[55vh] mt-52">
        <p className="font-bold text-gray-900 text-2xl">Quick Links</p>
        <div className="flex mt-16 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Pick up Locations</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Terms of Payment</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Privacy Policy</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">where to  Find us</p>
        </div>

      </div>
      <div className="w-64 h-[55vh] mt-52">
      <p className="font-bold text-gray-900 text-2xl">Our Services</p>
        <div className=" flex mt-16 ">
          
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Web Development</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">IT Consultancy</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Cloud Computing</p>
        </div>
        <div className=" flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Cyber Security</p>
        </div>
        

      </div>
      <div className="w-64 h-[55vh] mt-52">
      <p className="font-bold text-gray-900 text-2xl">Supports</p>
        <div className="flex mt-16 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Forum Support</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Help & FAQ</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Pricing and Plans</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Cookies Policy</p>
        </div>

      </div>
      <div className="w-64 h-[55vh] mt-52">
      <p className="font-bold text-gray-900 text-2xl">Company</p>
        <div className=" flex mt-16 ">
        <MdOutlineDoubleArrow color="gray" className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">About Us</p>
        </div>
        <div className="flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Leader Team</p>
        </div>
        <div className=" flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Case Studies</p>
        </div>
        <div className=" flex mt-5 ">
        <MdOutlineDoubleArrow color="gray"  className="mt-1"/> <p className="ml-6 font-thin text-gray-700 text-lg">Locations</p>
        </div>
        
      </div>
   
    </div>
    <div className="h-24 w-full">
      <div className="flex my-8 ml-96 ">
        <p className="ml-52 font-semibold text-lg text-red-600">Copyright</p> <p className="ml-3 font-semibold text-lg text-gray-900"> @ 2020</p> <span className="ml-3 font-semibold text-lg text-gray-900"> | All Rights Reserved</span>
      </div>
    </div>
   </div>
     
  );
};

export default Footer;
