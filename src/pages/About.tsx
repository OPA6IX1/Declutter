import female from "../assets/images/females-holding-shopping-bag.png";
import { GiShop } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import man from "../assets/images/Man-in-shirt.png";
import lady from "../assets/images/Woman-in-suit.png";
import men from "../assets/images/Man-in-suit.png";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

function About() {
  return (
    <main className="w-full flex justify-center pt-8 pb-10">
      <div className="w-[90%] max-w-5xl mt-18">
        <div className="mt-15 mb-10">
          <h1 className="text-[14px] font-semibold font-[poppins] text-black">
            <span className="opacity-50">Home</span>
            <span className="ml-2 opacity-50">/</span>
            <span className="text-black text-[14px] font-semibold font-[poppins] ml-2">
              About
            </span>
          </h1>
        </div>

        <div className="mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-xl font-semibold font-[inter] mb-5">
              Our Story
            </h1>
            <p className="font-[poppins] text-[16px] md:text-[14px] leading-relaxed">
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>

            <p className="font-[poppins] text-[16px] md:text-[14px] leading-relaxed mt-5">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from customers.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={female}
              alt="Females holding shopping bags"
              className="w-full max-w-[450px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
          <div className="border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <div className="pt-5 flex flex-col gap-3 flex justify-center items-center">
              <GiShop
                size={48}
                className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
              />
              <h1 className="text-2xl md:text-lg font-bold font-[inter]">
                10.5K
              </h1>
              <p className="opacity-80 text-[16px] md:text-[13px] font-semibold font-[poppins]">
                Sellers active on our site
              </p>
            </div>
          </div>

          <div className="border-2 border-white rounded-lg bg-[#DB4444] shadow-md">
            <div className="p-5 flex flex-col gap-3 justify-center items-center text-white">
              <AiOutlineDollar
                size={50}
                className="text-black bg-white border-[4px] border-gray-100 rounded-full p-1 shadow-lg flex items-center justify-center"
              />
              <h1 className="text-2xl md:text-lg font-bold font-[inter]]">
                33K
              </h1>
              <p className=" opacity-80 text-[16px] md:text-[13px] font-semibold font-[poppins]">
                Monthly Product Sales
              </p>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <div className="p-5 flex flex-col gap-3 justify-center items-center">
              <MdOutlineShoppingBag
                size={48}
                className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
              />
              <h1 className="text-2xl md:text-lg font-bold font-[inter]">
                44.5K
              </h1>
              <p className="opacity-80 text-[16px] md:text-[13px] font-semibold font-[poppins]">
                Customers active on our site
              </p>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg bg-white shadow-md">
            <div className="p-5 flex flex-col justify-center items-center">
              <div className="relative inline-block w-[60px] h-[60px]">
                <TbMoneybag
                  size={48}
                  className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
                />

                <div className="absolute right-7 top-5 flex items-center justify-center">
                  <BiDollar size={15} className="text-white" />
                </div>
              </div>
              <h1 className="text-2xl md:text-lg font-bold font-[inter]">
                25k
              </h1>
              <p className="opacity-80 text-[16px] md:text-[13px] font-semibold font-[poppins]">
                Annual gross sales in our site
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="p-5 flex flex-col gap-1 border-none w-[370px] h-[430px] rounded-lg items-center text-center">
            <img
              src={man}
              alt="man in shirt"
              className="bg-gray-200 w-[250px] h-[400px] object-cover aspect-[3/4]  object-top rounded-lg mx-auto"
            />
            <h1 className="text-lg font-semibold font-[inter] mt-3">
              Tom Cruise
            </h1>
            <p className="text-[16px] md:text-[14px] font-[poppins]">
              Founder & Chairman
            </p>
            <div className="flex gap-5 mt-3">
              <TfiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          <div className="p-5 flex flex-col gap-1 border-none w-[370px] h-[430px] rounded-lg items-center text-center">
            <img
              src={lady}
              alt="woman in suit"
              className="bg-gray-200 w-[250px] h-[400px]  aspect-[3/4] object-cover object-top rounded-lg mx-auto"
            />
            <h1 className="text-lg font-semibold font-[inter] mt-3">
              Emma Watson
            </h1>
            <p className="text-[16px] md:text-[14px] font-[poppins] ">
              Managing Director
            </p>
            <div className="flex gap-5 mt-3">
              <TfiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          <div className="p-6 flex flex-col gap-1 border-none w-[370px] h-[430px] rounded-lg items-center text-center">
            <img
              src={men}
              alt="man in shirt"
              className="bg-gray-200 w-[250px] h-[400px] object-cover aspect-[3/4]  object-top rounded-lg mx-auto"
            />
            <h1 className="text-lg font-semibold font-[inter] mt-3">
              Will Smith
            </h1>
            <p className="text-[16px] md:text-[14px] font-[poppins]">
              Product Designer
            </p>
            <div className="flex gap-5 mt-3">
              <TfiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center mt-15">
          <button className="w-2 h-2 rounded-full bg-gray-200 "></button>

          <button className="w-2 h-2 rounded-full bg-gray-200 "></button>

          <button className="w-2 h-2 rounded-full bg-[#DB4444] "></button>

          <button className="w-2 h-2 rounded-full bg-gray-200 t"></button>

          <button className="w-2 h-2 rounded-full bg-gray-200 "></button>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-20">
          <div className="">
            <div className="pt-5 flex flex-col gap-3 flex justify-center items-center">
              <TbTruckDelivery
                size={48}
                className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
              />
              <h1 className="text-xl md:text-lg font-semibold font-[poppins]">
                FREE AND FAST DELIVERY
              </h1>
              <p className="opacity-80 text-[14px] md:text-[12px] font-semibold font-[poppins]">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-3 justify-center items-center ">
            <PiHeadphones
              size={50}
              className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
            />
            <h1 className="text-xl md:text-lg font-semibold font-[poppins]">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className=" opacity-80 text-[14px] md:text-[12px] font-semibold font-[poppins]">
              Friendly 24/7 customer support
            </p>
          </div>

          <div className="p-5 flex flex-col gap-3 justify-center items-center ">
            <MdSecurity
              size={50}
              className="text-white bg-black border-[5px] border-gray-400 rounded-full p-1 shadow-lg flex items-center justify-center"
            />
            <h1 className="text-xl md:text-lg font-semibold font-[poppins]">
              MONEY BACK GUARANTEE
            </h1>
            <p className="opacity-80  text-[14px] md:text-[12px] font-semibold font-[poppins]">
              We return money back between 30 days
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
