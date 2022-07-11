import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const section2 = () => {
  return (
    <div>
      <div className="w-[90%]">
        <div className=" w-full h-full flex mx-10 justify-center mt-48">
          <div className="h-full w-[40%] flex ">
            <div className=" w-full h-full">
              <div className=" w-full h-full mt-24 ml-20 flex ">
                <div className="w-6/12 h-full ml-[4rem]" id="bg-images">
                  <div className=" h-40 py-5 w-80 mt-80 ml-[4rem] rounded-tr-3xl rounded-bl-3xl bg-pink-50">
                    <p className="w-72 mx-[1rem] font-semibold">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Hic ipsa eaque at aliquid enim et voluptatum illo
                      laudantium impedit dicta,
                    </p>
                  </div>
                </div>
                <div className=" h-24 rotate-90 w-72 mt-28 ">
                  <p className="text-6xl  text-red-600 font-bold my-4">25+</p>{" "}
                  <span className="semibold text-2xl  text-gray-900">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50rem] pl-[9rem] h-full"> 
          <div className=" mt-20">
            <p className=" text-red-600 font-semibold ">WHY CHOOSE US!</p>
            <p className="text-gray-900 text-4xl font-bold mt-5">
              Some Reasons Why You
            </p>
            <p className="text-gray-900 text-4xl font-bold mt-5">
              Should Choose Us!
            </p>
          </div>
          <div className="flex mt-14">
            <div className="h-9 w-9 bg-pink-50 ">
              <IoMdCheckmark size={30} color="red" />
            </div>
            <span className="text-gray-500 font-semibold text-xl mt-1 mx-5">
              Simplify Communication
            </span>
            <div className="h-9 w-9 bg-pink-50 ">
              <IoMdCheckmark size={30} color="red" />
            </div>
            <span className="text-gray-500 font-semibold text-xl mt-1 mx-5">
              Eliminate Repeat Entry
            </span>
          </div>

          <div className="flex mt-8">
            <div className="h-9 w-9  bg-pink-50 ">
              <IoMdCheckmark size={30} color="red" />
            </div>
            <span className="text-gray-500 font-semibold text-xl mt-1 mx-5">
              24/7 Customer Service
            </span>
            <div className="h-9 w-9  bg-pink-50 ml-5">
              <IoMdCheckmark size={30} color="red" />
            </div>
            <span className="text-gray-500 font-semibold text-xl mt-1 mx-5">
              Expert Team Members
            </span>
          </div>
          <div className=" w-4/5 mt-8">
            <p className="font-semibold text-lg text-blue-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nam pariatur impedit tenetur amet sequi est. Dicta, a
              velit voluptatum eaque explicabo officia laborum rerum
            </p>
            <p className="font-semibold text-lg text-gray-500 mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati nam pariatur impedit tenetur amet sequi est. Dicta, a
              velit voluptatum eaque explicabo officia laborum rerum
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
