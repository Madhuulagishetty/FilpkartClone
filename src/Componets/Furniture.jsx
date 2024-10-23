import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Furniture = () => {
  const item = [
    {
      img: "https://rukminim2.flixcart.com/image/210/210/j5ihlzk0/bed-mattress/2/y/c/6-48-75-skbnnldb75x48x06-bonnell-spring-peps-original-imaevnpjqz2mwyrz.jpeg?q=80",
      title: "Matreess",
      price: "From  ₹2,950",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/l4d2ljk0/sofa-sectional/x/j/l/left-facing-180-34-aqua-blue-241-3-polyester-80-steffan-l-sheped-original-imagf9zer8ptqhrh.jpeg?q=80",
      title: "Sofa",
      price: "Grab Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/office-study-chair/z/t/2/1-teak-sagun-58-42-js-29-beaatho-121-92-original-imagrwgshgp2bhwv.jpeg?q=80",
      title: "String Instruments",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/170/170/jm9hfgw0/bed/h/g/g/king-na-rosewood-sheesham-bkwl05nhbs0401d1p-flipkart-perfect-original-imaf97cwhvgnwg95.jpeg?q=80",
      title: "Nescafe Classic",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=80",
      title: "Best Toy",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=80",
      title: "cycle",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=80",
      title: "Dry fruits",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=80",
      title: "Cycle",
      price: "From $ 788",
    },
  ];
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
    // setShowSlider(false)
  };

  return (
    <div className="md:overflow-hidden m-4 w-[full] bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-start text-[19px] p-3"> Furniture</h1>
        <p className="m-3 bg-blue-800 p-2 rounded-2xl text-white">
          <IoIosArrowForward />
        </p>
      </div>
      <div
        className={`md:flex transition duration-1000 gap-4 overflow-x- ${
          showSlider ? "translate-x-[-800px]" : " translate-x-0"
        }`}
      >
        {item.map((products,index) => {
          return (
            <div className=" group flex gap-8 items-center   flex-row m-6 p-2  md:flex-col md:duration-500 md:border md:w-[220px] shrink-0 md:gap-9">
               <Link to='/Products'>
              <img
                src={products.img}
                alt=""
                className="w-[100px] h-[100px] object-contain md:w-[150px] md:h-[150px] md:group-hover:scale-110  md:duration-300 cursor-pointer"
                 key={index}/>
              <p>
                {" "}
                <p className="font-bold cursor-pointer">{products.title} </p>
                <span className="cursor-pointer">{products.price}</span>
              </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block">
        {showSlider ? (
          <div
            onClick={toggleSlider}
            className=" md:absolute left-0 border md:top-[200%] bg-white hover:bg-gray-300 cursor-pointer"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowBack />
          </div>
        ) : (
          <p
            onClick={toggleSlider}
            className=" md:absolute right-0 border md:top-[200%] bg-white hover:bg-gray-300"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowForward />
          </p>
        )}
      </div>
    </div>
  );
};

export default Furniture;
