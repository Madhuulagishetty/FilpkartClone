import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { FiInbox } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ContextData } from "../ContextApi/ContextApi";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const [navHover, setnavHover] = useState();
  const [SearchBar, setsearchBar] = useState("");

  // const { CartLength,SearchInput}=useContext(ContextData)
  const { CartLength, updateSearchInput } = useContext(ContextData);

  const Filter = (e) => {
    setsearchBar(e.target.value);
  };

  useEffect(() => {
    updateSearchInput(SearchBar);
  }, [SearchBar]);

  const MouseHover = (namehover) => {
    setnavHover(namehover);
  };
  const MOuseLeave = () => {
    setnavHover(null);
  };

  const HandleOPenClick = () => {
    setisopen(true);
  };
  const Wrong = () => {
    setisopen(false);
  };

  return (
    <div className="w-[100%] fixed z-50">
      <div className="bg-white flex shadow-lg justify-between md:justify-center gap-3 ">
        <div className="flex gap-6">
          <div>
            <p className="pt-6 text-xl pl-4 md:hidden">
              <FaBars onClick={HandleOPenClick} />
            </p>
            {isopen && (
              <div
                className={`overlay  absolute top-0 left-0 h-full w-full bg-gray-200 border z-40 transition duration-300 delay-150 ${
                  isopen ? "opacity-100" : "opacity-0 "
                }`}
              >
                <ul className="p-7 flex flex-col gap-3 overlay  absolute top-0 left-0 h-full w-full bg-gray-200 border z-40 transition duration-300 delay-150 ${
                ">
                  <p>
                    <RxCross1
                      className="absolute top-0 text-xl"
                      onClick={Wrong}
                    />
                  </p>
                  <li className="flex items-center p-2 hover:bg-gray-300">
                    <IoPersonSharp className="mr-2" />
                    My profile
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-300">
                    <FiInbox className="mr-2" />
                    Orders
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-300">
                    <RiCoupon3Line className="mr-2" />
                    Coupons
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-300">
                    <CiCreditCard2 className="mr-2" />
                    Gift card
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-300">
                    <IoIosNotificationsOutline className="mr-2" />
                    Notifications
                  </li>
                </ul>
              </div>
            )}
          </div>
           <Link to={'/'}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png"
            alt="Flipkart Logo"
            width="120px"
            height="120px"
          />
          </Link>
        </div>
        <input
          type="search"
          name="search"
          className=" hidden md:block text-lg h-8 border-none rounded outline-none bg-gray-200 w-[50%] p-3 mt-5"
          placeholder="Search products, Brands and More"
          onChange={Filter}
        />
        <div
          className="group person md:group items-center  cursor-pointer rounded hover:bg-gray-200 border m-3"
          onMouseOver={() => {
            MouseHover("person");
          }}
          onMouseLeave={MOuseLeave}
        >
          <IoPersonSharp className="text-sm m-1" />
          <p className="text-[16px]">Madhu</p>

          <IoIosArrowDown className="text-1xl cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:rotate-360" />

          {navHover === "person" && (
            <div className="absolute z-40 mt-4 w-48 bg-white shadow-lg rounded-md border top-10">
              <ul className="p-2 ">
                <li className="flex items-center p-2 hover:bg-gray-200">
                  <IoPersonSharp className="mr-2" />
                  My profile
                </li>
                <li className="flex items-center p-2 hover:bg-gray-200">
                  <FiInbox className="mr-2" />
                  Orders
                </li>
                <li className="flex items-center p-2 hover:bg-gray-200">
                  <RiCoupon3Line className="mr-2" />
                  Coupons
                </li>
                <li className="flex items-center p-2 hover:bg-gray-200">
                  <CiCreditCard2 className="mr-2" />
                  Gift card
                </li>
                <li className="flex items-center p-2 hover:bg-gray-200">
                  <IoIosNotificationsOutline className="mr-2" />
                  Notifications
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="seller md:text-[16px]   cursor-pointer p-2 rounded pt-5 ">
          <div className=" flex items-center">
            <FiInbox className="text-xl m-1 " />
            <p className="lg:block md:hidden "> Become a Seller </p>
          </div>
        </div>
        <Link to="cartItems">
          <div
            className="pt-5 pr-4"
            onMouseOver={() => {
              MouseHover("cart");
            }}
            onMouseLeave={MOuseLeave}
          >
            <p className="text-2xl flex items-center ">
              <PiShoppingCartSimple />
              <p className="lg:block md:hidden text-[18px] ">
                {" "}
                Cart{" "}
                <sup className="border-[2px ] text-sm bg-blue-900 text-white pt-1 pb-1 pl-2 pr-2 rounded-xl">
                  {CartLength}
                </sup>{" "}
              </p>
              {navHover === "cart" && (
                <h1
                  className="absolute bg-black text-white text-[12px] top-11"
                  style={{ padding: "0px 4px" }}
                >
                  cart
                </h1>
              )}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
