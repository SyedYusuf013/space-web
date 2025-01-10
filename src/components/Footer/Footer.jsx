import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {

  // const showAlert = () => {
  //   alert("Your email is sent.");
  // };


  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission to avoid a page refresh
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

    if (emailPattern.test(email)) {
      alert("Your email is sent ");
      setEmail(""); // Clear the input field
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="relative z-50 px-5 text-white bg-gray-800">
      <section data-aos="fade-up" className="max-w-[1500px] mx-auto text-white">
        <div className="grid py-5 md:grid-cols-3">
          {/* First Col */}
          <div className="px-4 py-8">
            <h1 className="mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left"> Be Ready To Grow</h1>
            <p>Get Exclusive <span className="font-bold text-blue-500 cursor-pointer"> Update </span>straigt to your inbox.
            </p>
            <br />
            <form onSubmit={handleSubmit} className="flex items-center h-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 py-1 h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
              />
              <button type="submit" className="ml-1 primary-button">OK</button>
            </form>
          </div>
          {/* Second Col */}
          <div className="grid grid-cols-1 col-span-2 sm:grid-cols-2 md:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li >
                    <a className=" hover:text-blue-500" href="#hero">About</a>
                  </li>
                  <li >
                    <a className=" hover:text-blue-500" href="#services">Technology</a>
                  </li>
                  <li>
                    <a className=" hover:text-blue-500" href="#banner">Galaxy</a>
                  </li>
                  <li>
                    <a className=" hover:text-blue-500" href="#banner2">Satelite</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold">More to Know</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a className=" hover:text-blue-500" href="https://en.wikipedia.org/wiki/Spacecraft" target="/blank">Spaceship</a>
                  </li>
                  <li >
                    <a className=" hover:text-blue-500" href="https://en.wikipedia.org/wiki/Aircraft" target="/blank">Aircraft</a>
                  </li>
                  <li >
                    <a className=" hover:text-blue-500" href="https://en.wikipedia.org/wiki/Planet" target="/blank">Planets</a>
                  </li>
                  <li >
                    <a className=" hover:text-blue-500" href="https://en.wikipedia.org/wiki/Universe" target="/blank">Universe</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 pt-8">
                <h1 className="mb-2 text-xl font-bold">Contact Us</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 pt-1 cursor-pointer hover:text-blue-500">
                  <HiLocationMarker />
                  <p>Jamia Nagar, Okhla, New Delhi</p>
                </div>
                <div className="flex items-center gap-3 mt-3 cursor-pointer hover:text-blue-500">
                  <MdMessage />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3 cursor-pointer hover:text-blue-500">
                  <MdCall />
                  <p>+91 7862159431</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="">
          <div className="flex flex-col items-start justify-between py-6 border-t-2 border-gray-400 lg:flex-row">
            <span className="text-sm text-gray-400">copyright &copy; 2025 by SFY</span>
            <div className="flex items-center justify-center gap-4 pb-4 mt-4 lg:mt-0 lg:pb-0">
              <a className="hover:text-blue-500" href="https://www.instagram.com/" target="/blank">
                <FaInstagram className="text-4xl" />
              </a>
              <a className="hover:text-blue-500" href="https://www.facebook.com/" target="/blank">
                <FaFacebook className="text-4xl" />
              </a>
              <a className="hover:text-blue-500" href="https://www.linkedin.com/" target="/blank">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>Term & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;  