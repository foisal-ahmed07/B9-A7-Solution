import React from "react";

const Nav = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="flex-col lg:flex-row flex justify-between items-center ">
        <h2 className="text-4xl font-bold pb-5">Recipes Calories</h2>
        <div className="flex gap-5 pb-5 text-gray-500">
          <p>Home</p>
          <p>Recipes</p>
          <p>About</p>
          <p>Search</p>
        </div>
        <div className="flex items-center  gap-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full rounded-full"
          />
          <div className=" bg-green-400 p-5 rounded-full ">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
