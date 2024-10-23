import React from "react";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div
        className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
        style={{
          backgroundImage: `url("../../src/assets/banner.png")`,
        }}
      >
        <div className="p-8 ">
          <h1 className="text-center text-3xl font-bold text-white mb-5 pt-36">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>

          <p className="text-white text-center pb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br /> problems to become an
            exceptionally well world-class Programmer.
          </p>

          <div className="flex gap-5 justify-center">
            <button className="btn rounded-full px-5 py-3 bg-green-400">
              Explore Now
            </button>
            <button className="btn hover:bg-green-400 bg-transparent border rounded-full px-5 py-3 text-white">
              Our feedBack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
