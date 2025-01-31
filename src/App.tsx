// import React from 'react'
import { Routes, Route} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Navbar from "./components/navBar"
import Footer from "./components/footer"


// import Home from "./pages/home";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import AppAccount from "./pages/Account";

const App = () => {
  return (
    <>
    
       
          <div className="h-16 w-full flex justify-center  fixed top-0 left-0 bg-black shadow-lg z-50">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-2">
              <p className="text-[18px] md:text-[18px] font-[poppins] font-[400] text-white text-center opacity-70 ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
              
              <div className="flex justify-center mt-7 gap-70 ">
                <p className="text-[20px] md:text-[18px] font-[poppins] font[600] text-white">
                  <a href="/login" className="text-white underline">
                    ShopNow
                  </a>
                </p>

                <p className="flex mb-8 text-[30px] md:text-[16px] font-[poppins] font[600] text-white ">
                English<RiArrowDropDownLine size={30}/>

                </p>
              </div>
            </div>
            
          </div>
          <div className="mt-15  w-full">
            <Navbar />
          </div>

    <main className="mt-16">
         <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="account" element={<AppAccount />} />
        </Routes>
    </main>


      
     <div className="mt-15  w-full">
        <Footer/>
      </div>  

  </>

  )
}

export default App
