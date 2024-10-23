import React from "react";
import { useNavigate } from "react-router-dom";

const CartOverlay = () => {
  const Navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="h-[100vh] w-[100%] bg-gray-300 flex justify-center items-center">
        <div className="w-[80%] border h-[70%] bg-white flex justify-center items-center flex-col">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
            className="w-[300px] h-[300px] object-contain "
          />
          <p className="text-xl">Your cart is empty!</p>
          <p className="text-sm">Add items to it now.</p>
          <button
            className="bg-blue-700 pt-3 pb-3 pl-5 pr-5  text-white mt-4"
            onClick={() => {
              Navigate("/products");
            }}
          >
            Shop Now !
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
