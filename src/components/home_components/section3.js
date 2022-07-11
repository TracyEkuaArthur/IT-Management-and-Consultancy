import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";



const Section3 =() => {
    return(
       <div className="bg-pink-50">
         <div className="h-[40vh] w-full bg-pink-50">
        <div className="h-52 w-2/6 mt-[4rem] mx-auto ">
          <p className="text-orange-600 font-semibold py-3  ml-48">
            SUCCESS STORIES
          </p>
          <p className="text-gray-900 font-bold text-4xl my-3 ml-16">
            Successfully Complete
          </p>
          <p className="text-gray-900 font-bold text-4xl ml-24">
            All Case Of Clients.
          </p>
        </div>
      </div>
      <div className="bg-pink-50 h-full w-full flex justify-evenly  mt-6">
        <div className="w-1/2 h-4/5 flex justify-between mr-10 flex-wrap ">
          <div className="h-48 w-5/12 mb-20" id="group_">
            <div className=" w-72 flex h-32 mt-32 ml-3 bg-pink-200">
              <div className="border-2 h-14 my-7 border-orange-300 mx-8 w-14">
                <BiRightArrowAlt color="red" size={30} className="mt-3 mx-2" />
              </div>
              <p className="mt-10  w-14 text-xl font-bold text-gray-900 my-5">
                {" "}
                Management Services.
              </p>
            </div>
          </div>
          <div className="h-48 w-5/12 mb-20 " id="ar_">
            <div className=" w-72 flex h-32 mt-32 ml-3 bg-pink-200">
              <div className="border-2 h-14 my-7 border-orange-300 mx-8 w-14">
                <BiRightArrowAlt color="red" size={30} className="mt-3 mx-2" />
              </div>
              <p className="mt-6  w-14 text-xl font-bold text-gray-900">
                Banding Development.
              </p>
            </div>

            {/* <div className="border-2">fjjgjjgjgj</div> */}
          </div>

          <div className="h-48 w-5/12 my-5" id="tr_">
            <div className="w-72 flex h-32 mt-32 ml-3 bg-pink-200">
              <div className="border-2 h-14 my-7 border-orange-300 mx-8 w-14">
                <BiRightArrowAlt color="red" size={30} className="mt-3 mx-2" />
              </div>
              <p className="mt-6  w-14 text-xl font-bold text-gray-900">
                Technology Prototyping.
              </p>
            </div>

            {/* <div className="border-2">fjjgjjgjgj</div> */}
          </div>
          <div className="h-48 w-5/12 mt-6"id="ig_">
            <div className="w-72 flex h-32 mt-32 ml-3 bg-pink-200">
              <div className="border-2 h-14 my-7 border-orange-300 mx-8 w-14">
                <BiRightArrowAlt color="red" size={30} className="mt-3 mx-2" />
              </div>
              <p className="mt-8  w-14 text-xl font-bold text-gray-900">
                UI/UX Design.
              </p>
            </div>

            {/* <div className="border-2">fjjgjjgjgj</div> */}
          </div>
        </div>

        <div className="w-1/4  h-3/4 " id="man_">
          <div className=" w-72 mt-96 mx-10 bg-pink-100 h-28 flex">
            <div className="h-14 my-7 border-orange-200 mx-8 w-14">
              <BiRightArrowAlt color="red" size={30} className="mt-3 mx-2" />
            </div>
            <p className="mt-6  w-14 text-xl font-semibold text-gray-900">
              Product Consultant.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-72 bg-pink-50  ">
        <div className=" w-1/2 h-72 mx-auto mt-48">
          <div className=" mx-80 ">
            <p className="font-semibold text-red-600 text-lg my-14">Testimonial</p>
          </div>
          <p className="text-4xl font-bold text-gray-900 mx-48 my-3 ">
            What People Say{" "}
          </p>
          <p className="text-4xl font-bold text-gray-900 mx-20">
            About Our Company Services.
          </p>
        </div>
      </div>
      <div className=" h-64 w-full flex justify-evenly bg-pink-50">
        <div className=" w-2/6 h-56 bg-red-200">
          <p className="font-medium text-lg text-gray-900 mt-16 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            laborum ut sapiente quasi consectetur aut eum maxime? Veniam fuga,
            ipsum praesentium dolorum soluta nam, fugiat minus obcaecati libero
            expedita unde!
          </p>
        </div>

        <div className=" w-2/6 h-56 bg-red-200">
          <p className="font-medium text-lg text-gray-900 mt-16 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            laborum ut sapiente quasi consectetur aut eum maxime? Veniam fuga,
            ipsum praesentium dolorum soluta nam, fugiat minus obcaecati libero
            expedita unde!
          </p>
        </div>
      </div>
      <div className=" h-48 w-full flex justify-evenly bg-pink-50">
        <div className=" w-2/6 h-28 flex">
          <div className="h-20 w-20 border-2 rounded-full mx-8">
            <img src="./images/aura.jpg" alt="" className="rounded-full" />
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900 mx-3 mt-3 my-2">
              Aurange Ofei
            </p>
            <p className="mx-3 text-gray-600">Web Developer</p>
          </div>
        </div>

        <div className=" w-2/6 h-28 flex">
          <div className="h-20 w-20 rounded-full mx-8">
            <img src="./images/nec.jpg" alt="" className="rounded-full" />
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900 mx-3 mt-3 my-2">
              Nectarine Osei
            </p>
            <p className="mx-3 text-gray-600">UX Designer</p>
          </div>
        </div>
      </div>
      <div className=" h-96 w-full bg-pink-50 mt-10">
        <div className="h-52 w-3/4 mx-auto flex justify-evenly bg-indigo-900">
          <div className=" h-52 w-3/5">
            <p className="text-white font-semibold text-3xl mt-8 my-2">
              Contact With Us .
            </p>
            <p className="text-white font-semibold text-3xl my-2">
              To Require A Detailed Analysis
            </p>
            <p className="text-white font-semibold text-3xl">Of Your Plan.</p>
          </div>
          <div className=" h-52 w-1/5">
            <p className="text-2xl font-semibold text-white mt-8">
              +23 00 937 367{" "}
            </p>
            <div className="border-2 h-20 w-52 mx-auto rounded bg-red-600 mt-6">
              <p className="font-semibold text-xl text-white mx-8 mt-4  ">
                Contact Today
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 w-3/4 mx-auto bg-red-600"></div>
      </div>

       </div>
    );
}
export default Section3;