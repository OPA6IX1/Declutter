// import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <nav className="w-full flex items-center justify-evenly mt-5 py-7 pb-10 fixed top-11 left-0 z-50 text-black border border-slate-300">
    <h1 className="text-[25px] md:text-[20] font-bold font-[inter]">Exclusive</h1>

    <ul className=" text-[20px] md:text-[16px] font-[poppins] font-[400] hover:text-gray-300 hidden lg:flex gap-8 items-center text-lg">
      <li><NavLink to="/" className="">Home</NavLink></li>
      <li><NavLink to="/contact" className="">Contact</NavLink></li>
      <li><NavLink to="/about" className="">About</NavLink></li>
      <li><NavLink to="/signup" className="">Sign Up</NavLink></li>
    </ul>
    
        <div className="flex gap-5 items-center ">
            <form className="flex items-center gap-2 border-none bg-gray-200 px-4 py-2 rounded-md ">
          
             <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-customGray font- font-light"/>
         <IoSearchOutline size={15}/>
        </form>

        <div>
          <CiHeart size={20} />
        </div>

        <div className="">
          <IoCartOutline size={20} />
        </div>

        <div className=" bg-[#DB4444] rounded-full p-1 text-white">
          <FiUser size={13} />
        </div>
        </div>

  </nav>
  )
}

export default navBar
