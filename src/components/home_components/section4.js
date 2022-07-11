import React from "react"


const Section4 = () => {
    return(
        <div>
             <div className="w-full h-72 bg-pink-50">
        <div className=" w-1/2 h-72 mx-auto">
          <div className=" mx-80 ">
            <p className="font-semibold text-red-600 text-lg ">Blog Post</p>
          </div>
          <p className="text-4xl font-bold text-gray-900 mx-32 my-5">
            Some Latest Article From{" "}
          </p>
          <p className="text-4xl font-bold text-gray-900 mx-48">
            Our News Feed.
          </p>
        </div>
      </div>
      <div className="h-3/5 w-full flex justify-evenly bg-pink-50">
        <div className="w-2/5 h-96 flex">
          <div className="h-96 w-1/2">
            <img src="./images/ff.jpg" alt="" className="h-96" />
          </div>
          <div className=" h-96 w-96 bg-pink-100">
            <p className="text-red-600 font-semibold text-lg mx-6 mt-16 my-4">
              22 August, 2022
            </p>
            <p className="font-bold text-gray-900 mx-6 my-3 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </p>
            <p className="mx-6 mt-10 text-gray-500 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              laudantium quia a atque veniam nemo quas eum consequatur 
              Qui, optio. 
            </p>
          </div>
        </div>
        <div className="w-2/5 h-96 flex">
          <div className=" h-96 w-1/2">
            <img src="./images/hh.jpg" alt="" className="h-96" />
          </div>
          <div className="h-96 w-96 bg-pink-100">
          <p className="text-red-600 font-semibold text-lg mx-6 mt-16 my-4">
              22 June, 2022
            </p>
            <p className="font-bold text-gray-900 mx-6 my-3 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </p>
            <p className="mx-6 mt-10 text-gray-500 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              laudantium quia a atque veniam nemo quas eum consequatur 
              Qui, optio. 
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-full w-full flex justify-evenly bg-pink-50">
        <div className="w-2/5 h-full flex">
          <div className=" h-96 w-1/2 mt-10">
            <img src="./images/gg.jpg" alt="" className="h-96 shrink-0" />
          </div>
          <div className=" h-96 w-96 bg-pink-100 mt-10">
          <p className="text-red-600 font-semibold text-lg mx-6 mt-16 my-4">
              22 April, 2022
            </p>
            <p className="font-bold text-gray-900 mx-6 my-3 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </p>
            <p className="mx-6 mt-10 text-gray-500 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              laudantium quia a atque veniam nemo quas eum consequatur 
              Qui, optio. 
            </p>
          </div>
        </div>
        <div className="w-2/5 h-96 flex">
          <div className=" h-96 w-1/2 mt-10">
            <img src="./images/ii.jpg" alt="" className="h-96" />
          </div>
          <div className=" h-96 w-96 bg-pink-100 mt-10">
          <p className="text-red-600 font-semibold text-lg mx-6 mt-16 my-4">
              22 July, 2022
            </p>
            <p className="font-bold text-gray-900 mx-6 my-3 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </p>
            <p className="mx-6 mt-10 text-gray-500 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              laudantium quia a atque veniam nemo quas eum consequatur 
              Qui, optio. 
            </p>
          </div>
        </div>
      </div>
     
        </div>

    );

}

export default Section4;