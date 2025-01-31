import { BsTelephone } from "react-icons/bs";
import { LiaEnvelope } from "react-icons/lia";

function AppContact() {
  return (
    <main className="w-full min-h-screen flex justify-center pt-8 pb-10 bg-gray-50">
      <div className="w-[90%] max-w-5xl mt-15">
        <div className="mt-15 mb-10">
          <h1 className="text-[14px] font-semibold font-[poppins] text-black">
            <span className="opacity-50">Home</span>
            <span className="ml-2 opacity-50">/</span>
            <span className="text-black text-[14px] font-semibold font-[poppins] ml-2">
              Contact
            </span>
          </h1>
        </div>

        <div className="mx-auto flex flex-col md:flex-row gap-10">
          <div className="p-6 bg-white shadow-medium rounded-lg w-full md:w-[40%]">
            <div className="flex items-center gap-3">
              <BsTelephone className="text-[#DB4444] text-xl" />
              <h1 className="text-[16px] md:text-[14px] font-semibold font-[poppins]">
                Call To Us
              </h1>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-[14px] md:text-[12px] font-[400] font-[poppins]">
                We are available 24/7, 7 days a week
              </p>
              <p className="mb-2 text-[14px] md:text-[12px] font-[400] font-[poppins]">
                Phone: +8801611112222
              </p>
            </div>
            <hr className="mt-5 mb-5 border-gray-300" />
            <div className="flex items-center gap-3">
              <LiaEnvelope className="text-[#DB4444] text-xl" />
              <h1 className="text-[16px] md:text-[14px] font-semibold font-[poppins]">
                Write To Us
              </h1>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-[14px] md:text-[12px] font-[400] font-[poppins]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mb-2 text-[14px] md:text-[12px] font-[400] font-[poppins]">
                Email: customer@exclusive.com
              </p>
              <p className="mb-2 text-[14px] md:text-[12px] font-[400] font-[poppins]">
                Email: support@exclusive.com
              </p>
            </div>
          </div>

          <div className="p-6 bg-white shadow-medium rounded-lg w-full md:w-[55%]">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  id="yourname"
                  placeholder="Your Name *"
                  className="border border-gray-300 bg-gray-100 rounded p-2 text-[14px] md:text-[12px] font-[poppins] w-full"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email *"
                  className="border border-gray-300 bg-gray-100 rounded p-2 text-[14px] md:text-[12px] font-[poppins] w-full"
                />
                <input
                  type="text"
                  id="phonenumber"
                  placeholder="Your Phone *"
                  className="border border-gray-300 bg-gray-100 rounded p-2 text-[14px] md:text-[12px] font-[poppins] w-full"
                />
              </div>
              <div className="mt-5">
                <textarea
                  className="w-full h-40 p-3 border border-gray-300 bg-gray-100 rounded text-[14px] md:text-[12px] font-[poppins]"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="border-none rounded bg-[#DB4444] px-6 py-3 text-white text-[14px] md:text-[12px] font-[poppins] hover:bg-red-600 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppContact;
