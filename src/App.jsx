import React, { useState } from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div id="hero" className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <Navbar setShowLogin={setShowLogin} />
        <Hero />
      </div>

      {/* Services Card Section */}
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* Banner Section */}
      <div id="banner">
        <Banner />
      </div>

      {/* Banner2 Section */}
      <div id="banner2">
        <Banner2 />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
