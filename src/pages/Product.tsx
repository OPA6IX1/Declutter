// import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import image1 from "../assets/images/white-gaming-pad.png";
import image2 from "../assets/images/small-gaming-pad4.png";
import image3 from "../assets/images/small-gaming-pad3.png";
import image4 from "../assets/images/small-gaming-pad2.png";
import image5 from "../assets/images/small-gaming-pad1.png";
import redpad from "../assets/images/Red-gaming-pad.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import board from "../assets/images/Keyboard.png";
import tv from "../assets/images/Led-tv.png";
import disc from "../assets/images/big-disc.png";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { RiLoader3Line } from "react-icons/ri";

const AppProduct = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>("S");

  const decreaseQuantity = () => {
    if (quantity === 1 || quantity < 1) {
      toast.error("You can't buy less than 1 item");
      return;
    }

    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity === 9 || quantity > 9) {
      toast.error("You can't buy more than 9 items");
      return;
    }

    setQuantity(quantity + 1);
  };

  return (
    <main className="w-full min-h-screen pt-8 pb-10 bg-gray-50">
      <div className="w-[90%] mt-40 max-w-7xl mx-auto">
        <div className=" mr-46 mb-15">
          <h1 className="text-[14px] gap-5 font-semibold opacity-50 font-[poppins] text-black">
            <span className="">Account</span>
            <span className="mx-4">/</span>
            <span className="">Gaming</span>
            <span className="mx-4">/</span>
            <Link to="#Havic HV G-92 Gamepad" className="hover:text-gray-600">
              Havic HV G-92 Gamepad
            </Link>
          </h1>
        </div>

        {/* Product Layout */}
        <div className="flex flex-wrap md:flex-nowrap gap-40 ">
          {/* Product Images */}
          <div className="flex gap-5">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {[image2, image3, image4, image5].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-[125px] w-[130px] bg-gray-100 rounded-lg p-2 cursor-pointer hover:opacity-80"
                />
              ))}
            </div>

            {/* Main Image */}
            <div>
              <img
                src={image1}
                alt="Main Product"
                className="w-[500px] h-[550px] px-8 py-30 rounded-lg shadow-lg bg-gray-100 hover:opacity-90"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Havic HV G-92 Gamepad</h2>
            <div>
              <p>
                ⭐⭐⭐⭐⭐
                <span className="opacity-50 font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                  (150 Reviews)
                </span>
                <span className="text-gray-400 mx-4">|</span>
                <span className="opacity-50 text-emerald-400 font-semibold font-[poppins] text-[14px]">
                  In Stock
                </span>
              </p>
            </div>
            <p className="text-xl font-semibold font-[poppins] mt-5 text-gray-700 mb-2">
              $192.00
            </p>
            <p className="text-sm font-semibold font-[poppins] text-gray-500 mb-4">
              PlayStation 5 Controller Skin High quality vinyl with air
              <br /> channel adhesive for easy bubble free install & mess
              <br /> free removal Pressure sensitive.
            </p>
            <hr className="text-gray-500 mt-5 mb-5 w-90" />

            {/* Colors */}
            <div className="flex justify-items-start gap-5 mb-4">
              <h4 className="text-xl font-medium font-[poppins] mb-2">
                Colours:
              </h4>
              <div className="flex  gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-300 border cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
              </div>
            </div>

            {/* Sizes */}
            <div className="flex gap-5 mb-4">
              <h4 className="text-xl font-medium font-[poppins] mb-2">Size:</h4>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((value) => (
                  <button
                    key={value}
                    className={`px-3 py-1 border rounded hover:bg-red-500 hover:text-white cursor-pointer ${
                      value === size && "bg-red-500 text-white"
                    }`}
                    onClick={() => setSize(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded">
                <button
                  className="px-3 py-1   hover:bg-red-500 disabled:hover:bg-transparent"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <ToastContainer />
                <span className="px-3 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 hover:bg-red-500 disabled:hover:bg-transparent"
                  onClick={increaseQuantity}
                >
                  +
                </button>
                <ToastContainer />
              </div>
              <button className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Buy Now
              </button>
              <div className="border px-3 py-2 rounded">
                <CiHeart size={25} />
              </div>
            </div>

            {/* Delivery Information */}
            <div className="mt-6 py-2  border  rounded w-90 bg-white shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-black px-2 font-bold">
                  <LiaShuttleVanSolid size={28} />
                </span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-black font-medium">Free Delivery</span>
                  <span className="text-sm text-gray-500">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <hr className="my-2 " />

              <div className="flex items-center gap-3">
                <span className="text-black px-2 font-bold">
                  <RiLoader3Line size={28} />
                </span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-black font-medium">
                    Return Delivery
                  </span>
                  <span className="text-sm text-gray-500">
                    Free 30 days Delivery Returns.{" "}
                    <Link to="#" className="underline hover:text-gray-600">
                      Details
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-20">
          {" "}
          <div className="w-[12px] h-[30px] bg-[#DB4444] rounded-sm"></div>{" "}
          <h2 className="font-[poppins] font-semibold text-[#DB4444] text-[16px] md:text-[14px]">
            Related items
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className=" flex flex-col gap-3">
            <div className="bg-gray-200 rounded-lg relative w-[270px] h-[200px]">
              <img
                src={redpad}
                alt="pad"
                className="object-top w-[180px] h-[160px] flex justify-center items-center mx-auto pt-10"
              />
              <span className="bg-[#DB4444] absolute top-3 left-3 text-white text-[12px] md:text-[10px] rounded-sm px-1 py-1 font-[poppins]">
                -40%
              </span>
              <div className="flex flex-col gap-3 absolute top-5 left-60">
                <CiHeart size={15} className="rounded-full bg-white" />
                <IoEyeOutline size={15} className="rounded-full bg-white" />
              </div>
            </div>
            <h1 className="font-semibold font-[poppins] text-[14px] md:text-[12px]">
              HAVIT HV-G92 Game pad
            </h1>
            <p className="text-[#DB4444] font-semibold font-[poppins] text-[14px] md:text-[12px]">
              $120
              <span className="opacity-30 text-black font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                <del>$160</del>
              </span>
            </p>
            <p>
              ⭐⭐⭐⭐⭐
              <span className="opacity-50 font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                (88)
              </span>
            </p>
          </div>

          <div className=" flex flex-col gap-3">
            <div className="bg-gray-200 rounded-lg relative w-[270px] h-[200px]">
              <img
                src={board}
                alt="keyboard"
                className="object-cover w-[200px] h-[160px] flex justify-center items-center mx-auto pt-10"
              />
              <span className="bg-[#DB4444] absolute top-3 left-3 text-white text-[12px] md:text-[10px] rounded-sm px-1 py-1 font-[poppins]">
                -35%
              </span>
              <div className="flex flex-col gap-3 absolute top-5 left-60">
                <CiHeart size={15} className="rounded-full bg-white" />
                <IoEyeOutline size={15} className="rounded-full bg-white" />
              </div>
              <button className="bg-black text-white rounded-sm px-4 py-3 w-[270px] font-[poppins] font-semibold text-[14px]  md:text-[12px]">
                Add to Cart
              </button>
            </div>
            <h1 className="font-semibold font-[poppins] text-[14px] md:text-[12px]">
              AK-900 Wired Keyboard
            </h1>
            <p className="text-[#DB4444] font-semibold font-[poppins] text-[14px] md:text-[12px]">
              $960
              <span className="opacity-30 text-black font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                <del>$1160</del>
              </span>
            </p>
            <p>
              ⭐⭐⭐⭐
              <span className="opacity-50 font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                (75)
              </span>
            </p>
          </div>

          <div className=" flex flex-col gap-3">
            <div className="bg-gray-200 rounded-lg relative w-[270px] h-[200px]">
              <img
                src={tv}
                alt="led-tv"
                className="object-cover w-[200px] h-[160px] flex justify-center items-center mx-auto pt-10"
              />
              <span className="bg-[#DB4444] absolute top-3 left-3 text-white text-[12px] md:text-[10px] rounded-sm px-1 py-1 font-[poppins]">
                -30%
              </span>
              <div className="flex flex-col gap-3 absolute top-5 left-60">
                <CiHeart size={15} className="rounded-full bg-white" />
                <IoEyeOutline size={15} className="rounded-full bg-white" />
              </div>
            </div>
            <h1 className="font-semibold font-[poppins] text-[14px] md:text-[12px]">
              IPS LCD Gaming Monitor
            </h1>
            <p className="text-[#DB4444] font-semibold font-[poppins] text-[14px] md:text-[12px]">
              $370
              <span className="opacity-30 text-black font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                <del>$400</del>
              </span>
            </p>
            <p>
              ⭐⭐⭐⭐⭐
              <span className="opacity-50 font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                (99)
              </span>
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <div className="bg-gray-200 rounded-lg relative w-[270px] h-[200px]">
              <img
                src={disc}
                alt="disc"
                className="object-cover w-[200px] h-[160px] flex justify-center items-center mx-auto pt-10"
              />
            </div>
            <h1 className="font-semibold font-[poppins] text-[14px] md:text-[12px]">
              RGB Liquid CPU Cooler
            </h1>
            <p className="text-[#DB4444] font-semibold font-[poppins] text-[14px] md:text-[12px]">
              $160
              <span className="opacity-30 text-black font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                <del>$170</del>
              </span>
            </p>
            <p>
              ⭐⭐⭐⭐⭐
              <span className="opacity-50 font-semibold font-[poppins] text-[14px] md:text-[12px] px-3">
                (65)
              </span>
            </p>
          </div>
        </div>
        {/* masturah part end */}
      </div>
    </main>
  );
};

export default AppProduct;
