import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {HiOutlineArrowSmRight} from "react-icons/hi";

const Contact1 = () => {
  return (
    <div>
      <div className="h-[100vh] w-full flex justify-evenly">
        <div className="w-1/4 h-[95vh] bg-pink-50 rounded">
          <div className="flex ml-10 mt-16">
            <MdLocationPin size={20} color="red" className="mx-4 mt-1" />{" "}
            <span className="text-gray-700 font-medium">
              61 South Big Rock Cover Lane Lake
            </span>
          </div>
          <p className="ml-24 text-gray-700 font-medium mt-1">
            Zurich, Villad 60047
          </p>
          <div className="flex ml-10 mt-10">
            <IoIosCall size={20} color="red" className="mx-4 mt-1" />{" "}
            <span className="text-gray-700 font-medium">
              +233-593-637-341
            </span>
          </div>

          <p className="ml-24 text-gray-700 font-medium mt-1 ">
          +233-593-637-341
          </p>
          <div className="flex ml-10 mt-10">
            <MdEmail  size={20} color="red" className="mx-4 mt-1" />{" "}
            <span className="text-gray-700 font-medium">
              tracyekuaarthur@gmail.com
            </span>
          </div>

          <p className="ml-24 text-gray-700 font-medium mt-1">
            tracyekuaarthur@gmail.com
          </p>
          <div className="h-52 w-80 ml-7 mt-24 rounded">
            <img src="/images/ast.jpg" alt="" className="h-52 w-80 rounded"/>
          </div>
        </div>
        
        <div className="w-2/5 h-[90vh]">
            <div>
                <p className="text-4xl font-semibold text-gray-900">Get in Touch :</p>
            </div>
            <div className="">
                <input type="text" placeholder="Name:" className="font-medium text-gray-700 text-lg h-14 w-[35vw] rounded bg-pink-100 mt-10 px-4"/>
            </div>
            <div className="">
                <input type="text" placeholder="Email: " className="font-medium text-gray-700 text-lg h-14 w-[35vw] rounded bg-pink-100 mt-10  px-4"/>
            </div>
            <div className="">
                <input type="text" placeholder="Phone:" className="font-medium text-gray-700 text-lg h-14 w-[35vw] rounded bg-pink-100 mt-10 px-4"/>
            </div>
           <div>
            <textarea name="Message:" id="" cols="30" rows="10" placeholder="Message:" className=" bg-pink-100 mt-10 rounded w-[35vw] px-4 font-medium text-lg py-2 h-[30vh]"></textarea>
           </div>
           <div className="w-60 h-16 flex bg-red-600 rounded mt-10 ml-32" >
            <p className="text-lg font-semibold text-white ml-5 mt-5">Submit Comment</p> <HiOutlineArrowSmRight size="20"color="white" className="mt-7 ml-4"/>
          </div>
        </div>
    
      </div>
      <div className="h-28"></div>
    </div>
  );
};

export default Contact1;
