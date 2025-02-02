import cartphone from "../assets/images/cart&phone.png";

const LogIn = () => {
  return (
    <div className="flex flex-col pt-50 mb-70 lg:flex-row h-screen w-full items-center justify-center 
      mt-70 gap-8 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center ">
        <img
          src={cartphone}
          alt="Cart and Phone"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex w-full  md:w-1/2 flex-col  justify-center px-50 mb-20">
        <h2 className="text-3xl  md:text-4xl font-bold mb-4 text-center">Log in to Exclusive</h2>
        <p className="font-medium text-center text-gray-600 mb-6">
          Enter your details below
        </p>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-3  focus:outline-none"
            />
            <hr />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3  focus:outline-none"
            />
            <hr />
          </div>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-50 bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition"
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full text-red-600 font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
