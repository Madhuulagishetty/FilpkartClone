import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black  hidden md:block">
      <div className="bg-black flex  justify-around p-10 flex-wrap">
        <div>
          <h1 className="text-gray-400 font-bold text-sm">ABOUT</h1>
          <br />
          <div className="text-white flex flex-col text-sm font-sm">
            <Link to="/">Contact Us</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Cart Items</Link>
            <Link to="/">Filpkart</Link>
            <Link to="/">Press</Link>
          </div>
        </div>

        <div>
          <h1 className="text-gray-400 font-bold text-sm">GROUP COMPANIES</h1>
          <br />
          <div className="text-white flex flex-col text-sm font-sm">
            <Link to="/">Myntra</Link>
            <Link to="/">Clear Trip</Link>
            <Link to="#">Short</Link>
          </div>
        </div>

        <div>
          <h1 className="text-gray-400 font-bold text-sm">HELP</h1>
          <br />
          <div className="text-white flex flex-col text-sm font-sm">
            <Link to="/">Payment</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Cart Items</Link>
            <Link to="/">Filpkart</Link>
          </div>
        </div>

        <div>
          <h1 className="text-gray-400 font-bold text-sm">CONSUMER POLICY</h1>
          <br />
          <div className="text-white flex flex-col text-sm font-sm">
            <Link to="/">Contact Us</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Cart Items</Link>
            <Link to="/">Filpkart</Link>
            <Link to="/">Press</Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <h1 className="text-gray-400 font-bold text-sm">MAIl Us</h1>
            <br />
            <div className="text-white flex flex-col text-sm font-sm">
              <Link to="/" >lagishettymadhu@gmail.com</Link>
              <Link to="/">
                <h1 className="text-gray-400 font-bold text-[12px] pt-4">
                  FOLLOW US{" "}
                </h1>
                <div className="flex gap-3 pt-2 ">
                  <p className="text-[20px]">
                    <FiInstagram />
                  </p>
                  <p className="text-[20px]">
                    <CiFacebook />
                  </p>
                  <p className="text-[20px]">
                    <CiYoutube />
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-gray-400 font-bold text-sm">
              REGISTER ADDRESS
            </h1>
            <br />
            <div className="text-white flex flex-col text-sm font-sm">
              <Link to="/">
                {" "}
                Near 41 school ,ganesh nagar kamthghar bhiwandi - 421302
              </Link>
              {/* <h1>T</h1> */}
              <Link to="/">
                <h1 className="text-gray-400 font-bold text-[12px] pt-4">
                  TELEPHONE NUMBER{" "}
                </h1>
                <div className="flex gap-3 pt-2 ">
                  <p className="text-[12px] text-blue-600 ">9021951461</p>
                  <p className="text-[12px]">11100001223</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-white pt-[25px] pb-6">@2007-2024</p>
    </footer>
  );
};

export default Footer;
