import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [],
  };

  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/db8559478c4a4a55.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ab7c1601d1fd9f0.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4e2d01dbe0f907d2.jpg?q=20",
  ];

  return (
    <div className="hidden md:block w-full overflow-hidden ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
