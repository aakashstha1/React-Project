import React from "react";
import banner from "../assets/images/banner.png";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="flex justify-center flex-col mt-7 px-[70px] md:px-[150px] ">
      <img src={banner} className="rounded-2xl" />
      <div className="flex items-center bg-slate-200 shadow-lg p-4 mt-[-20px] mx-[25%] rounded-lg">
        <IoSearch className="text-[22px] text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent pl-2 text-[18px]"
        />
      </div>
    </div>
  );
}

export default Search;
