// import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 text-black border border-slate-300">
    <h1 className="text-2xl font-bold">Exclusive</h1>
    <ul className="flex gap-6">
      <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
      <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink></li>
      <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
      <li><NavLink to="/signup" className="hover:text-gray-300">Sign Up</NavLink></li>
    </ul>
    
    <div className="flex gap-8 items-center ">
        <form className="flex items-center gap-2 border-1 px-4 py-1 rounded-sm">
          
          <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-customGray font- font-light"
         />
         <IoSearchOutline />
        </form>
        </div>

  </nav>
  )
}

export default navBar
