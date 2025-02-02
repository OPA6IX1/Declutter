import cartphone from "../assets/images/cart&phone.png";
import google from "../assets/images/google.jpg";

const SignUp = () => {
  return (
    <div className="flex flex-col pt-50 mb-70 lg:flex-row h-screen w-full items-center justify-center 
      mt-70 gap-8 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={cartphone}
          alt="Cart and Phone"
          className="w-ful h-auto object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex w-full  md:w-1/2 flex-col  justify-center px-50 mb-20 ">
        <div >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Create an Account
          </h2>
          <p className="font-medium text-gray-600 mb-6 text-center md:text-left">
            Enter your details below
          </p>
  
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 focus:outline-none "
              />
              <hr/>
            </div>
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3  focus:outline-none"
              />
              <hr/>
            </div>
            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 focus:outline-none"
              />
              <hr/>
            </div>
            {/* Buttons */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition"
              >
                Create Account
              </button>
              <button
                type="button"
                className="w-full border py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <img src={google} alt="Google Icon" className="w-6 h-6 mr-2" />
                Sign up with Google
              </button>
            </div>
            {/* Redirect to Log In */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="<LogIn/>"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default SignUp;
