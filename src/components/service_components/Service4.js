import React from "react";

const Service4 = () => {
  return (
    <div>
      <div className="h-screen w-full ">
        <div className="w-[25vw] mx-auto h-[20vh]">
          <p className="mx-32 font-bold text-red-600">TEAM MEMBER</p>
          <p className="text-4xl font-bold text-gray-900 ml-10 mt-10">
            Our Professional
          </p>
          <p className="text-4xl font-bold text-gray-900 ml-12 mt-2">
            Team Members
          </p>
        </div>
        <div className="flex w-full mt-16 justify-evenly">
          <div className="border-2 w-[20vw] h-[60vh]" id="ser_">
            <div className="border-2 h-[15vh] w-[15vw]  mt-72 ml-8 bg-pink-50">
              <p className="ml-8 font-semibold text-2xl mt-4 text-gray-900">
                Aurange Offei
              </p>{" "}
              <span className="font-medium text-base ml-8 mt-4 text-gray-900">
                Consultant Officer
              </span>
            </div>
          </div>
          <div className="border-2 w-[20vw] h-[60vh]" id="ser1_">
            <div className="border-2 h-[15vh] w-[15vw] bg-pink-50 mt-72 ml-8">
              <p className="ml-5 font-semibold text-2xl mt-4 text-gray-900">
                Brittaney Hickson
              </p>{" "}
              <span className="font-medium text-base ml-6 mt-4 text-gray-900">
                Web Developer
              </span>
            </div>
          </div>
          <div className="border-2 w-[20vw] h-[60vh]" id="ser3_">
            <div className="border-2 h-[15vh] w-[15vw] bg-pink-50 mt-72 ml-8">
              <p className="ml-8 font-semibold text-2xl mt-4 text-gray-900">
                Rosalina Sheldon
              </p>{" "}
              <span className="font-medium text-base ml-8 mt-4 text-gray-900">
                UI Designer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default Service4;
