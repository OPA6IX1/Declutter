// import React from 'react'
import cartphone from "../assets/images/cart&phone.png"
import google from "../assets/images/google.jpg"

const SignUp = () => {
  return (
    <div>
      <div className="flex h-full w-full  mt-70 justify-between">
        <div className=" ">
          <img src={cartphone} alt=""/>
        </div>

        <div className="w-[50%] h-[50%]flex flex-col justify-center p-50">
    <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
    <p className="font-semibold">Enter your details below</p>
    <form className=" mt-5  w-full max-w-md">
      <div>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 w-full px-4 py-2 "
        />
        <hr/>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="mb-4 w-full px-4 py-2 "
        />
        <hr/>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="py-4 w-full px-4  "
        />
        <hr/>
      </div>
      <div>
        <button className=" mt-7 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 font-bold">
          Create Account
        </button>
        <button className="w-full mt-3 border py-2 rounded flex items-center justify-center">
          <img src={google} alt="Google Icon" className="w-7 h-5 mr-2" />
          Sign up with Google
        </button>
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </form>
  </div>
    </div>
    </div>
  )
}

export default SignUp
