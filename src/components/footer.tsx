// import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import code from "../assets/images/Qrcode 1.png";
import appstore from "../assets/images/Apple-store-logo.png";
import googleplay from "../assets/images/google-playstore-logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black w-full  flex flex-col justify-between mt-15 text-white">
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        
        <div className="mt-10">
          <h2 className="pb-2 text-[20px] md:text[16px] font-semi-bold font-[inter]">Exclusive</h2>
          <p className="mt-2 text-[12px] md:text[7px]  font-[poppins] leading-6">Subscribe</p>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Get 10% off your first order</p>
          <div className="mt-2 flex items-center gap-2 border px-2 py-1 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none text-[12px] md:text[8px] font-[poppins] text-[#FAFAFA]"
            />
            <AiOutlineSend />
          </div>
        </div>

        
        <div className="mt-10">
          <h2 className="pb-2 text-[14px] md:text[12px] font-semi-bold font-[poppins]">Support</h2>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">
            111 Bijoy Sarani, Dhaka, DH 1515 Bangladesh.
          </p>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">exclusive@gmail.com</p>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">88015-88888-9999</p>
        </div>

        
        <div className="mt-10">
          <h2 className="text-[14px] md:text[12px] font-semi-bold font-[poppins]">Account</h2>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">My Account</p>
          <p className=" mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Login/Register</p>
          <p className=" mt-2 text-[12px] md:text[7px]] font-[poppins] text-[#FAFAFA] leading-6">Cart</p>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">WishList</p>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Shop</p>
        </div>

      
        <div className="mt-10">
          <h2 className="text-[14px] md:text[12px] font-semi-bold font-[poppins]">Quick Link</h2>
          <p className="mt-2 text-[12px] md:text[7px]font-[poppins] text-[#FAFAFA] leading-6">Privacy Policy</p>
          <p className=" mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Terms of Use</p>
          <p className=" mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">FAQ</p>
          <p className=" mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Contact</p>
        </div>

        
        <div className="mt-10 ">
          <h2 className="text-[14px] md:text[12px]  font-[poppins]">Download App</h2>
          <p className="mt-2 text-[12px] md:text[7px] font-[poppins] text-[#FAFAFA] leading-6">Save $3 with App New Users Only</p>
          <div className="flex md:flex-row gap-3 mt-3">
            <div>
              <img src={code} alt="code" />
            </div>
            <div className="flex flex-row md:flex-col gap-4">
              <img src={appstore} alt="App Store" />
              <img src={googleplay} alt="Google Play" />
            </div>
          </div>
          <div className="flex gap-8 mt-5">
            <TiSocialFacebook />
            <TfiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      
      <div className="w-full flex justify-center items-center bg-black py-4">
        <p className="text-center text-[#F9F9F9] text-[14px] md:text-[12px] font-[poppins] opacity-50">
          © Copyright Rimel {currentYear}. All rights reserved.
        </p>
      </div>
    </div>
  );
};


export default AppFooter;

