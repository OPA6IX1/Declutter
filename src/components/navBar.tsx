// import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
<<<<<<< HEAD
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
=======
    <nav className="w-full flex items-center justify-evenly mt-5 pb-5 fixed top-11 left-0 z-50 text-black border border-slate-300">
    <h1 className="text-2xl md:text-[20] font-bold font-[inter]">Exclusive</h1>

    <ul className="hidden lg:flex gap-8 items-center text-lg text-[17px] md:text-[18px] font-[poppins] font-[400]">
      <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
      <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink></li>
      <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
      <li><NavLink to="/signup" className="hover:text-gray-300">Sign Up</NavLink></li>
    </ul>
    
    <div className="flex gap-5 my-7 items-center ">
        <form className="flex items-center gap-2 border-none bg-gray-100 px-4 py-2 rounded-md">
>>>>>>> Opa6ix
          
             <input
              type="text"
              placeholder="What are you looking for?"
<<<<<<< HEAD
              className="bg-transparent outline-none text-customGray font- font-light"/>
         <IoSearchOutline size={15}/>
        </form>

=======
              className="bg-transparent outline-none border-none text-[18px] md:text-[15px] font-[poppins] font-medium"
         />
         <IoSearchOutline size={20} />
        </form>
>>>>>>> Opa6ix
        <div>
          <CiHeart size={20} />
        </div>

        <div className="">
          <IoCartOutline size={20} />
        </div>

        <div className=" bg-[#DB4444] rounded-full p-1 text-white">
<<<<<<< HEAD
          <FiUser size={13} />
        </div>
=======
          <FiUser size={15} />
        </div>
      
>>>>>>> Opa6ix
        </div>

  </nav>
  )
}

export default navBar
