import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [GoUp, setGoUp] = useState(false);
  const HandleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const Pagescroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else setGoUp(false);
    };
    window.addEventListener("scroll", Pagescroll);
  }, []);
  
  if (!GoUp) return ; 
  return (
    <div>
      <button
        onClick={HandleScroll}
        className="fixed top-[9%] right-[39%] md:right-[50%] p-3 font-bold cursor-pointer bg-blue-800 text-white  rounded  z-40"
      >
        Scroll Top
      </button>
    </div>
  );
};

export default ScrollTop;
