import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { ContextData } from "../ContextApi/ContextApi";
import {  useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();

  const products = async () => {
    try {
      const i = await axios.get("https://fakestoreapi.com/products");
      setdata(i.data);
      setloading(false);
    } catch (error) {
      console.log(`Fettching ${error}`);
    }
  };

 
  useEffect(() => {
    products();
  }, []);

  const { AddtoCart, search } = useContext(ContextData);

  const FilterItems = data.filter((item) =>
    item.title.toUpperCase().includes(search.toUpperCase())
  );

  return loading ? (
    <div className="w-[100%] h-[100vh] flex items-center justify-center text-2xl">
      <div aria-label="Loading..." role="status" class="loader">
        <svg class="icon" viewBox="0 0 256 256">
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
        </svg>
        <span class="loading-text">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="">
      <div className="flex  flex-wrap gap-10 justify-center pt-[100px] pb-[100px]">
        {FilterItems.map((item) => {
          const { image, title, price } = item;
          return (
            <div className="group  w-[300px] h-[350px] hover:shadow-2xl shadow-2xl md:shadow-none flex flex-col gap-2  items-center justify-center">
              <img
                src={image}
                alt=""
                className="w-[170px] h-[170px] object-contain p-5 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-start group-hover:text-blue-800">
                {title.slice(0, 25)}
              </p>
              <p className="flex gap-2">
                Price: {price}
                <span className="line-through text-gray-500">₹11,20</span>
                <span className="font-semibold text-green-600">65% off</span>
              </p>
              <div className="flex gap-3">
                <button
                  className="flex bg-[#ff9f00] text-white justify-center items-center font-bold gap-1 p-2 rounded transition hover:bg-[#ff7f00]"
                  onClick={() => {
               
                      AddtoCart(item);
                    
                  }}
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>
                <button className="flex bg-[#fb641b] text-white justify-center items-center font-bold gap-1 p-2 rounded transition hover:bg-[#d95b1f]">
                  <AiFillThunderbolt />
                  Buy Now
                </button>
              </div>
            </div>
          );
          
        })}
      </div>
    </div>
  );
};

export default Products;
