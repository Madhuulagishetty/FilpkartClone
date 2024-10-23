import React from "react";
import HomePageCard1 from "./HomePageCard1";
import ImageSlider from "./ImageSilder";
import ElectronicMain from "./ElectronicMain";
import ToysandCards from "./ToysandCards";
import Furniture from "./Furniture";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100  pt-[1%] ">
      <HomePageCard1 /> <ImageSlider />
      <ElectronicMain />
      <ToysandCards />
      <Furniture />
      <div className="hidden md:block">
      <Footer/></div>
    </div>
  );
};

export default Home;
