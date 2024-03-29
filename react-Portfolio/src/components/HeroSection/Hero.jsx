import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center w-full mt-[10px] ">
      <div className="flex justify-evenly text-center items-center  m-3 gap-4 flex-wrap  max-w-[1180px] w-full border border-gray-700">
        <div className=" flex flex-col items-center float-left ">
          <span className="text-6xl">Hi, I'm Garv Shah</span>
          <span className="text-4xl">A Front End Engineer</span>
          <p>Wellcome to my portfolio</p>
        </div>
        <div className="float-right p-4">
          <img className="h-96" src="/images/dev.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
