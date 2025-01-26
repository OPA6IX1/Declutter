// import React from 'react'
import { Routes, Route} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Navbar from "./components/navBar"
import Footer from "./components/footer"


// import Home from "./pages/home";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
    
       
          <div className="h-16 w-full flex justify-center  fixed top-0 left-0 bg-black shadow-lg z-50">
            <div className="flex   gap-5 mt-5 ">
              <p className="item-center text-white text-center ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
              
              <div className="flex gap-70 ">
                <p className="">
                  <a href="/login" className="text-white underline">
                    ShopNow
                  </a>
                </p>
                <p className="flex mb-8 text-white ">
                English<RiArrowDropDownLine  className="text-[30px] md-1 "/>
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
        <Route path="contact" element={<Contact />} />
        </Routes>
    </main>

      
            
       <Footer/>  
  </>

  )
}

export default App
