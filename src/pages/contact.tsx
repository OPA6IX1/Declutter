

const Contact = () => {

  return (
  <>
  
      <main className="w-full min-h-screen flex flex-col justify-center pt-8 pb-10 bg-gray-50">
        <div className="w-[90%] mx-auto">
        


export default Contact

        <hr className="border-gray-300 w-full mt-7"/>
          <div className="flex justify-between md:flex-row py-8">
            <div>
              <h1 className="text-[14px] font-semibold font-[poppins] text-black">
                <span className="opacity-50">Home</span>
                <span className="ml-2 opacity-50">/</span>
                <span className="text-black text-[14px] font-semibold font-[poppins] ml-2">
                  My Account
                </span>
              </h1>
            </div>
            <div>
              <h1 className="text-[14px] font-semibold font-[poppins] text-black">
                Welcome!{" "}
                <span className="text-[14px] font-semibold font-[poppins] text-[#DB4444]">
                  Md Rimel
                </span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 w-full md:w-[40%]">
              <div>
                <h2 className="text-[16px] md:text-[14px] font-semibold font-[poppins]">
                  Manage My Account
                </h2>
                <p className="text-[14px] md:text-[12px] font-[400] font-[poppins] text-[#DB4444] opacity-50 ml-4 mt-2">
                  My Profile
                </p>
                <p className="text-[14px] md:text-[12px] font-[400] font-[poppins] opacity-50 ml-4 mt-2">
                  Address Book
                </p>
                <p className="text-[14px] md:text-[12px] font-[400] font-[poppins] opacity-50 ml-4 mt-2">
                  My Payment Options
                </p>
              </div>
              <div>
                <h2 className="text-[16px] md:text-[14px] font-semibold font-[poppins] mt-4">
                  My Orders
                </h2>
                <p className="text-[14px] md:text-[12px] font-[400] font-[poppins] opacity-50 ml-4 mt-2">
                  My Returns
                </p>
                <p className="text-[14px] md:text-[12px] font-[400] font-[poppins] opacity-50 ml-4 mt-2">
                  My Cancellations
                </p>
              </div>
              <h2 className="text-[16px] md:text-[14px] font-semibold font-[poppins] mt-4">
                My Wishlist
              </h2>
            </div>

            <div className="flex-3 mt-5 md:mt-0">
              <form className="w-full sm:max-h-[70vh] sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto bg-white p-6 rounded-lg s">
                <h2 className="text-[20px] md:text-[16px] font-semibold text-[#DB4444]">
                  Edit Your Profile
                </h2>

                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="text-[16px] md:text-[14px] font-[poppins]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Md"
                      id="firstName"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="text-[16px] md:text-[14px] font-[poppins]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Rimel"
                      id="lastName"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="text-[16px] md:text-[14px] font-[poppins]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="rimel1111@gmail.com"
                      id="email"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label
                      htmlFor="address"
                      className="text-[16px] md:text-[14px] font-[poppins]"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Kingston, 5236, United State"
                      id="address"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-[16px] md:text-[14px] font-[poppins]">
                    Password Changes
                  </h2>
                  <div className="flex flex-col gap-3 mt-3">
                    <input
                      type="password"
                      placeholder="Current password"
                      id="currentPassword"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      id="newPassword"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      id="confirmPassword"
                      className="border-none bg-gray-200 rounded p-2 text-[14px] md:text-[12px] font-[poppins]"
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-end mt-6">
                  <button className="border-none bg-gray-100 px-4 py-2 text-[14px] md:text-[12px] font-[poppins]">
                    Cancel
                  </button>
                  <button className="border-none rounded bg-[#DB4444] px-4 py-2 text-white text-[14px] md:text-[12px] font-[poppins]">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default Contact;
