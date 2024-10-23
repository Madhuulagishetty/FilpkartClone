import React from "react";
import { Link } from "react-router-dom";

const HomePageCard1 = () => {
  const categories = [
    {
      name: "Grocery",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
    },
    {
      name: "Electronics",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    },
    {
      name: "Fashion",
      icon: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
      subcategories: [
        "Men's Top Wear",
        "Men's Bottom Wear",
        "Women Ethnic",
        "Men's Footwear",
        "Watches",
        "Womens Western",
        "Kids",
      ],
    },
    {
      name: "Mobiles",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      subcategories: ["Smartphones", "Accessories", "Smartwatches"],
    },
    {
      name: "Home",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    },
    {
      name: "Appliances",
      icon: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    },
    {
      name: "Beauty and Toys",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
    },
    {
      name: "Two Wheelers",
      icon: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      subcategories: ["Petrol vehicles", "Electric vehicles"],
    },
    {
      name: "Flight",
      icon: "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      subcategories: ["Domestic Flights", "International Flights"],
    },
  ];

  return (
    <div
      className="HomeMain overflow-x-scroll mx-auto overflow-hidden gap-10 flex justify-around bg-white max-w-screen-xl p-[7%] md:p-[2%] mb-2"
      style={{ marginTop: "81px", outline: "none" }}
      tabIndex="-1"
    >
      {categories.map(({ name, icon }, index) => (
        <div
          key={index}
          className="group  md:p-0 box-model flex flex-col h-[120px] justify-center items-center md:justify-center gap-1 cursor-pointer relative"
        >
          <Link to="Products">
            <img
              src={icon}
              alt={name}
              className="w-[100px] h-[80px] object-contain"
            />
            <p className="flex items-center group-hover:text-blue-900 font-semibold justify-center">
              {name.slice(0, 11)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePageCard1;
