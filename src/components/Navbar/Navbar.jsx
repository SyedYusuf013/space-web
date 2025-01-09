import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("about");

  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 z-[99] w-full py-4 bg-black/10 backdrop-blur-sm sm:py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-2xl font-bold text-white">
            <a href="#hero" ><img className="w-10" src={Logo} alt="logo" /></a>
            <span>SFY-SPACE</span>
          </div>
          <div className="hidden text-white md:block">
            <ul className="flex items-center gap-6 py-4 text-xl sm:py-0">
              <a
                href="#hero"
                onClick={() => setMenu("about")}
                className={`pb-[2px] border-b-2 border-solid cursor-pointer ${menu === "about" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMenu("technology")}
                className={`pb-[2px] border-b-2 border-solid cursor-pointer ${menu === "technology" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                Technology
              </a>
              <a
                href="#banner"
                onClick={() => setMenu("galaxy")}
                className={`pb-[2px] border-b-2 border-solid cursor-pointer ${menu === "galaxy" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                Galaxy
              </a>
              <a
                href="#banner2"
                onClick={() => setMenu("satelite")}
                className={`pb-[2px] border-b-2 border-solid cursor-pointer ${menu === "satelite" ? "border-blue-500" : "border-transparent"
                  }`}
              >
                Satelite
              </a>
              
            </ul>
          </div>
          <div>
            <button onClick={() => setShowLogin(true)} className="px-3 py-1 text-white border-2 border-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;