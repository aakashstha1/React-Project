import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} className="w-[180px]" />
      <ul className="flex gap-4 md:gap-14 text-lg font-bold text-slate-500">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">About Us</li>
        <li className="hover:text-black cursor-pointer">Contact Us</li>
      </ul>
      <div className="flex gap-4 md:gap-04 ">
        <button className="bg-blue-200 py-2 rounded-2xl font-bold text-slate-700 w-[100px]">
          Login
        </button>
        <button className="bg-blue-200 py-2 rounded-2xl font-bold text-slate-700 w-[100px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
