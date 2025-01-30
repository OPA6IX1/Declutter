// import React from 'react'
import cartphone from "../assets/images/cart&phone.png"


const logIn = () => {
  return (
    <div>
      <div className="flex h-full w-full  mt-70 justify-between">
        <div className=" ">
          <img src={cartphone} alt=""/>
        </div>

        <div className="w-[50%] h-[50%]flex flex-col justify-center p-50">
    <h2 className="text-3xl font-semibold mb-4">Log in to Exclusive</h2>
    <p className="font-semibold">Enter your details below</p>
    <form className=" mt-7  w-full max-w-md">
      <div>
        <input
          type="Email"
          placeholder="Email or Phone Number"
          className="mb-4 w-full px-4 py-2 "
        />
        <hr/>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="py-4 w-full px-4 mt-5 "
        />
        <hr/>
      </div>
      <div className="flex flex-row my-10 gap-8">
        <button className="  w-full bg-red-500 text-white py-4 border border-red-500 rounded hover:bg-red-600 font-bold">
          Log in
        </button>
        <button className="w-full   py-4 rounded flex items-center justify-center font-semibold text-red-600">
          Forget Password?
        </button>
      </div>
    </form>
  </div>
    </div>
    </div>
  )
}

export default logIn
