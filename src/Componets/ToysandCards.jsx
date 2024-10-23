import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ToysandCards = () => {
  const item = [
    {
      img: "https://rukminim2.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=80",
      title: "Soft Toy",
      price: "Grab Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=80",
      title: "Best Mobile Speaker",
      price: "Grab Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=80",
      title: "String Instruments",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80",
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
        <h1 className="font-bold text-start text-[19px] p-3"> Best Of Toys</h1>
        <p className="m-3 bg-blue-800 p-2 rounded-2xl text-white">
          <IoIosArrowForward />
        </p>
      </div>
      <div
        className={`md:flex transition duration-1000 gap-4 overflow-x- ${
          showSlider ? "translate-x-[-800px]" : " "
        }`}
      >
        {item.map((products) => {
          return (
            <div className="group border flex gap-8 items-center justify-between   flex-row m-6 p-2 md:border  md:flex-col md:w-[200px] shrink-0 md:gap-9">
              <div className="flex items-center md:flex-col md:gap-8 p-3 gap-3">
                <Link to='/Products'>
                  <img
                    src={products.img}
                    alt=""
                    className="w-[100px] h-[100px] object-contain md:w-[150px] md:h-[150px] md:group-hover:scale-110  md:duration-300 cursor-pointer"
                  />
                  <p>
                    {" "}
                    <p className="font-bold cursor-pointer">
                      {products.title}{" "}
                    </p>
                    <span className="cursor-pointer">{products.price}</span>
                  </p>
                </Link>
              </div>
              <div>
                <p className="m-3 hover:bg-gray-200 p-2 rounded-2xl text-gray-500 md:hidden">
                  <IoIosArrowForward />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block">
        {showSlider ? (
          <div
            onClick={toggleSlider}
            className=" md:absolute left-0 border top-[150%] bg-white hover:bg-gray-300 cursor-pointer"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowBack />
          </div>
        ) : (
          <p
            onClick={toggleSlider}
            className=" md:absolute right-0 border top-[150%] bg-white hover:bg-gray-300"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowForward />
          </p>
        )}
      </div>
    </div>
  );
};

export default ToysandCards;
