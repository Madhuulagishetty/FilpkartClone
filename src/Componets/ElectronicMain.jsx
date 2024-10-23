import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ElectronicMain = () => {
  const [SLide, setSLide] = useState(false);

  const items = [
    {
      img: "https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80",
      title: "Best HeadPhone",
      price: "Grab Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80",
      title: "Best Mobile Speaker",
      price: "Grab Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80",
      title: "SmartWatch",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kpsnzww0/external-hard-drive/ssd/t/9/7/portable-ssd-sdssde30-1t00-g25-sandisk-original-imag3xx564jxpgrb.jpeg?q=80",
      title: "Sandisk Harddrive",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kxhvf680/monitor/v/6/e/thinkvision-t24t-20-full-hd-24-62c5gar1ww-lenovo-original-imag9xzkwh6zkrdh.jpeg?q=80",
      title: "Monitor",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=80",
      title: "Printer",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/projector/b/4/t/i9-pro-10-ei9027-led-projector-egate-original-imah3t9zfxufhdze.jpeg?q=80",
      title: "Projector",
      price: "From $ 788",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=80",
      title: "Shaver",
      price: "From $ 788",
    },
  ];

  const HandleClick = () => {
    setSLide(!SLide);
  };

  return (
    <div className="md:overflow-hidden m-4 w-[full] bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-start text-[19px] p-3">
          Best Of Electronic
        </h1>
        <p className="m-3 bg-blue-800 p-2 rounded-2xl text-white">
          <IoIosArrowForward />
        </p>
      </div>
      <div
        className={`md:flex transition duration-1000 gap-4 overflow-x- ${
          SLide ? "translate-x-[-600px]" : "translate-x-0 "
        }`}
      >
        {items.map((products, index) => {
          return (
            <div className="group border flex gap-8 items-center justify-between   flex-row m-6 p-2 md:border  md:flex-col md:w-[200px] shrink-0 md:gap-9">
              <div className="flex items-center md:flex-col md:gap-8 p-3 gap-3">

              <Link to='/Products'>
                <img
                  src={products.img}
                  alt=""
                  className="w-[100px] h-[100px] object-contain md:w-[150px] md:h-[150px]  md:group-hover:scale-110  md:duration-300 cursor-pointer"
                  key={index}
                />
                <p>
                 
                  <p className="font-bold">{products.title} </p>
                  <span className="">{products.price}</span>
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
        {SLide ? (
          <div
            onClick={HandleClick}
            className=" md:absolute left-0 border top-[95%] bg-white hover:bg-gray-300"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowBack />
          </div>
        ) : (
          <p
            onClick={HandleClick}
            className=" md:absolute right-0 border top-[95%] bg-white hover:bg-gray-300"
            style={{ padding: "2rem 10px" }}
          >
            <IoIosArrowForward />
          </p>
        )}
      </div>
    </div>
  );
};

export default ElectronicMain;
