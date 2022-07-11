import React from "react";
import { MdArrowRight } from "react-icons/md";

const Service2 = () => {
  return (
    <div>
      <div className=" h-screen w-full flex justify-evenly">
        <div className=" w-96 h-[70vh]" id="prs_">
          <div className=" h-20 w-20 mt-52 ml-24 bg-red-600  rounded-full">
            <MdArrowRight size={60} color="white" className="ml-2 mt-2" />
          </div>
          <div className=" mt-20 w-68">
            <p className="font-bold text-3xl text-white ml-6 ">
              Have any project
            </p>
            <p className="font-bold text-3xl text-white mt-4 ml-10">
              in your mind?
            </p>
            <p className="font-bold text-3xl text-red-600 mt-5 ml-10">
              +00 66 97 83
            </p>
          </div>
        </div>
        <div className=" w-[55vw] h-[40vh]">
          <p className="font-medium text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam veniam omnis amet cumque, sunt delectus. Ab sunt sequi rem
            dolorum ullam nobis itaque, odio quasi repudiandae corporis?
            Eveniet, ducimus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde numquam veniam omnis amet cumque, sunt delectus. Ab sunt
            sequi rem dolorum ullam nobis itaque, odio quasi repudiandae
            corporis? Eveniet, ducimus!
          </p>
          <p className="font-bold mt-8 text-lg text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eaque rem? Quod tenetur, eos temporibus quis commodi veritatis
            perferendis vel inventore aliquid totam ipsam, ratione at velit,
            explicabo rem dignissimos?eos temporibus quis commodi veritatis
          </p>
          <div className="flex justify-between">
            <div className=" mt-20 h-[50vh] w-[20vw]" id="man_">
              <div className=" h-64 w-64 mt-64 ml-24">
                <img src="/images/nec.jpg" alt="" className="h-[35vh] w-64" />
              </div>
            </div>
            <div className="w-[30vw] h-[60vh] mt-20 ">
              <p className="font-bold text-4xl text-gray-900">How it Works?</p>
              <p className="font-medium text-lg text-gray-600 mt-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis quae voluptatem quisquam esse nulla dignissimos
                culpa nobis facilis eos! Inventore architecto doloribus
                temporibus ea voluptas quas delectus deleniti error totam!
              </p>
              <p className="font-medium text-lg text-gray-600 mt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae fugiat neque minus, ducimus recusandae voluptate
                facilis totam tempora non in odit id dolore aliquid explicabo!
                Cupiditate cum iure error ex!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-48"></div>
      <div className="mx-96 w-[65vw] h-[80vh]">
        <p className="ml-48 font-bold text-4xl">
          Helps Challenge critical activities
        </p>
        <p className="ml-48 font-medium text-lg text-gray-500 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          illum adipisci ratione facilis dolore distinctio at atque? Tempore
          vero beatae suscipit possimus ipsa dignissimos alias dicta qui ad, ex
          quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis illum adipisci ratione facilis dolore distinctio at atque?
          Tempore vero beatae suscipit possimus ipsa dignissimos alias dicta qui
          ad, ex quae.
        </p>
        <p className="ml-48 mt-8 font-semibold text-lg text-gray-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi est,
          repellendus optio, error laudantium dicta ex odit consequatur vitae
          odio minus, laborum ratione ipsa iusto sit aut. Voluptatibus,
        </p>
        <p className=" ml-48 font-medium text-lg text-gray-500 mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          voluptatem dolor culpa, quasi modi quos neque enim itaque sit sequi.
          Sunt laboriosam deleniti soluta, officia quis voluptat quo? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus
          rerum maxime aliquam magni 
        </p>
      </div>
    </div>
  );
};

export default Service2;
