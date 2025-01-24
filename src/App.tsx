// import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import LogIn from "./pages/logIn";
import SignIn from "./pages/signIn";
import Contact from "./pages/contact";

const App = () => {
  return (
    <main className="mt-16">
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
    </main>
  )
}

export default App
