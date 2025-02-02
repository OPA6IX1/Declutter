// import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/white-gaming-pad.png";
import image2 from "../assets/images/small-gaming-pad4.png";
import image3 from "../assets/images/small-gaming-pad3.png";
import image4 from "../assets/images/small-gaming-pad2.png";
import image5 from "../assets/images/small-gaming-pad1.png";

const AppProduct = () => {
  return (
    <main className="w-full min-h-screen pt-8 pb-10 bg-gray-50">
      <div className="w-[90%] mt-40 max-w-7xl mx-auto">
        {/* Breadcrumb */}
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
            <p className="text-xl text-gray-700 mb-2">$192.00</p>
            <p className="text-sm text-gray-500 mb-4">
              PlayStation 5 Controller Skin. High-quality vinyl with air channel
              adhesive for easy bubble-free install. It resists removal pressure
              sensitivity.
            </p>
            <hr/>

            {/* Colors */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Colours:</h4>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-300 border cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Size:</h4>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded">
                <button className="px-3 py-1  hover:bg-red-500">-</button>
                <span className="px-3 py-1">1</span>
                <button className="px-3 py-1 hover:bg-red-500">+</button>
              </div>
              <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Buy Now
              </button>
            </div>

            {/* Delivery Information */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Return Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppProduct;
