import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "../images/logo.png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between p-6 pt-7 items-center h-14 sticky">
      <div className="flex gap-5 items-center w-48">
        <div className="hover:bg-[#222222] p-2 rounded-full cursor-pointer" onClick={toggleSidebar}>
          <AiOutlineMenu className="text-2xl" />
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <img src={logo} alt="logo" className="w-24 h-auto" />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center w-1/2">
        <div className="w-4/5 ">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-11/12 min-w-48 p-2 pl-4 bg-transparent outline-none bg-[#121212] border border-[#303030]  rounded-l-full focus:border focus:border-blue-600"
            />
            <button
              type="submit"
              className="bg-[#222222] text-2xl w-16 p-2 h-full rounded-r-full flex items-center justify-center border-y border-r border-[#303030] cursor-pointer"
            >
              <CiSearch />
            </button>
          </form>
        </div>
        <div className="bg-[#222222] text-2xl p-2 rounded-full hover:bg-[#3d3d3d] cursor-pointer">
          <IoMdMic />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <div className="hover:bg-[#222222] p-2 rounded-full cursor-pointer">
          <RiVideoAddLine className="text-2xl" />
        </div>
        <div className="flex items-center justify-center p-2 relative hover:bg-[#222222] rounded-full cursor-pointer">
          <FaRegBell className="text-2xl" />
          <span className="absolute bottom-5 left-5 text-xs bg-[#cc0000] rounded-full px-1 border border-[#290000]">
            9+
          </span>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/800px-YouTube_social_white_square_%282017%29.svg.png"
          alt="profile"
          className="w-9 h-9 rounded-full cursor-pointer active:border-2 active:border-blue-600"
        />
      </div>
    </div>
  );
};

export default Navbar;
