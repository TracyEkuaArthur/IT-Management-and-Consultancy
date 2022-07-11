import React from 'react'
import {VscGitCompare} from "react-icons/vsc";
import {BsFillFileSlidesFill} from "react-icons/bs";
import {BiCloudLightRain} from "react-icons/bi";
import {RiSecurePaymentLine} from "react-icons/ri";
import {AiOutlineSetting} from "react-icons/ai";
import {MdOutlineEditCalendar} from "react-icons/md";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { TbBrandEdge } from "react-icons/tb";
import { TbBrandCodesandbox } from "react-icons/tb";
import { TbBrandSlack } from "react-icons/tb";
import { BsSnow3 } from "react-icons/bs";



const Section1 = () => {
  return (
   <div>
    <div>
     <div className="h-full w-1/2 mt-28 mx-auto">
        <div className="font-bold text-red-600 ml-64">OUR SERVICES</div>
        <div>
          <p className=" text-4xl font-bold ml-36 mt-5 text-gray-900">
            Choose Service For
          </p>
        </div>
        <div>
          <p className="text-4xl font-bold ml-28 mt-3 text-gray-900">
            {" "}
            Manage Your Business
          </p>
        </div>
      </div>
      <div className=" w-full h-full flex mt-10">
        <div className=" h-3/4 w-8/12 ">
          <div className=" w-full ml-48 h-32 flex">
            <div className="h-32 w-4/12 flex bg-pink-100 items-center mt-8 ">
              <VscGitCompare color="red" size="55" className="ml-10 mx-5" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  IT Management
                </h3>
                <h3 className="text-xl font-semibold text-gray-900">
                  Services.
                </h3>
              </div>
            </div>

            <div className="h-32 w-4/12 ml-10 flex bg-pink-100 items-center mt-8">
              <BsFillFileSlidesFill
                color="red"
                size="55"
                className="ml-5 mx-5"
              />{" "}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Backup & Data
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {" "}
                  Recovery.
                </h3>
              </div>
            </div>
          </div>
          <div className=" w-full ml-48 h-32 flex my-20">
            <div className="h-32 w-4/12 flex bg-pink-100 items-center">
              <BiCloudLightRain color="red" size="55" className=" mx-5 " />{" "}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Cloud Managed
                </h3>
                <h3 className="text-xl font-semibold text-gray-900">
                  Services.
                </h3>
              </div>
            </div>

            <div className="h-32 w-4/12 ml-10 flex bg-pink-100 items-center">
              <RiSecurePaymentLine
                color="red"
                size="55"
                className="ml-5 mx-5 "
              />{" "}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Cyber Security.
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Services
                </h3>
              </div>
            </div>
          </div>
          <div className=" w-full ml-48 h-32 flex">
            <div className="h-32 w-4/12 flex bg-pink-100 items-center">
              <AiOutlineSetting color="red" size="55" className="ml-5 mx-5 " />{" "}
              <div>
                {" "}
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Software
                </h3>
                <h3 className="text-xl font-semibold text-gray-900">
                  Development.
                </h3>
              </div>
            </div>

            <div className="h-32 w-4/12 ml-10 flex bg-pink-50 items-center">
              <MdOutlineEditCalendar
                color="red"
                size="55"
                className="ml-5 mx-5"
              />{" "}
              <div>
                {" "}
                <h3 className="text-xl font-semibold text-gray-900 ">
                  BigData And
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {" "}
                  Analytics.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[70vh] mt-8 w-96" id="bg_img">
          <div className="h-20 rounded bg-red-600 w-60 mt-96 ml-20 flex">
            <p className="text-xl px-5 mt-5 text-white">More Services</p>{" "}
            <MdOutlineKeyboardArrowRight
              size={20}
              color="white"
              className="mt-7"
            />
            <MdOutlineKeyboardArrowRight
              size={20}
              color="white"
              className="mt-7"
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 h-52 ml-48 flex bg-pink-50 justify-evenly mt-48">
        <div className="h-72 w-52 flex mt-10 ">
          <TbBrandEdge color="pink" size={100} />{" "}
          <h3 className="text-xl text-pink-400 font-medium my-14">BRAND</h3>
        </div>
        <div className="h-72 w-52 my-10">
          <TbBrandCodesandbox color="pink" size={100} />
        </div>
        <div className="h-72 w-52 my-10">
          <TbBrandSlack color="pink" size={100} />
        </div>
        <div className="h-72 w-52 my-10">
          <BsSnow3 color="pink" size={100} />
        </div>
      </div>
   </div>
  </div>
   

  );
}

export default Section1;