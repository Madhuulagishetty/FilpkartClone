import React, { useContext, useState } from "react";
import { ContextData } from "../ContextApi/ContextApi";
import { TfiClose } from "react-icons/tfi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartOverlay from "./CartOverlay";
import { Toaster } from "sonner";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [overlay, setOverlay] = useState(false);
  const [remove, setRemove] = useState();
  const [discountCode, setDiscountCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);

  const { cartData, RemoveFromCart, Increment, Decrement } =
    useContext(ContextData);

  const SubTotalBill = () => {
    // return cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return cartData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };
  const TotalBill = () => {
    const total = cartData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
 

    const discountedTotal = total - discountValue;
    return discountedTotal > 0 ? discountedTotal : 0;
  };

  const notify = () => toast("Item is successfully removed");

  const Remove = (id) => {
    setRemove(id);
    setOverlay(true);
  };

  const confirmRemove = () => {
    RemoveFromCart(remove);
    notify();
    setOverlay(false);
  };

  const cancelRemove = () => {
    setOverlay(false);
  };

  //  console.log(TotalBill());
  console.log(typeof TotalBill);

  const ApplyDiscount = () => {
    const total = TotalBill();
   const Nmber =Number(total)
    
    if (discountCode === "GRAB30") {
      setDiscountValue(30);
      toast.success(`Discount code applied successfully!`);
    } else if (discountCode === "GRAB50") {
      setDiscountValue(50);
      toast.success(`Discount code applied successfully!`);
    } else {
      toast.error("Invalid discount code.");
    }
  };

  const HandleInputDis = (event) => {
    setDiscountCode(event);
  };
  const removeDisCount = () => {
    setDiscountCode("");
    setDiscountValue(0);
  };
  console.log(cartData);

  const MainIncrement = (id) => {
    Increment(id);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "red",
          },
          className: "class",
        }}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={2999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {cartData.length === 0 ? (
        <CartOverlay />
      ) : (
        <div className="Main-cart pt-[20%] md:pt-[7%] md:flex  ">
          <div>
            {cartData.map((item) => {
              const { image, title, price, id, quantity } = item;

              return (
                <div
                  key={id}
                  className="border flex flex-col justify-center p-4 m-5 hover:shadow-xl md:w-[600px]"
                >
                  <div className="group gap-2 md:flex  md:justify-start flex items-center  justify-center">
                    <img
                      src={image}
                      alt={title}
                      className="w-[120px] h-[120px] object-contain"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-[15px] md:text-[20px] text-gray-500 group-hover:text-blue-900">
                        {title}
                      </p>
                      <p>
                        <span className="line-through text-gray-500 p-2">
                          ₹11,20
                        </span>
                        Price: {`₹${price}`}
                        <span className="font-semibold text-green-600 p-2">
                          65% off
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex justify-center items-center pl-5">
                      <button
                        className="border m-2 p-3 hover:bg-gray-300"
                        onClick={() => Decrement(id)}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="border m-2 p-3 hover:bg-gray-300"
                        onClick={() => MainIncrement(id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="hidden md:block uppercase font-bold text-gray-700 hover:text-blue-900"
                      onClick={() => Remove(id)}
                    >
                      Remove
                    </button>
                    <button
                      className="uppercase font-bold text-gray-700 hover:text-blue-900 md:hidden"
                      onClick={() => RemoveFromCart(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="m-1 md:mt-5 md:fixed  md:right-[3%] min-h-[300px] min-w-[280px]  max-w-[350px] max-h-[550px] md:min-h-[700px] md:min-w-[500px] md:max-h-[900px] md:max-w-[550px]">
            <div className="flex justify-between flex-col border bg-gray-100 p-4">
              <h1 className="text-gray-500 uppercase font-semibold text-[17px] p-2">
                Price Details
              </h1>
              <h1 className="p-2 flex justify-between font-bold text-gray-500 text-lg">
                SubTotal : <p>₹{SubTotalBill().toFixed(2)}</p>
              </h1>

              <h1 className="p-2 flex justify-between font-bold text-gray-500 text-lg">
                Discount : <p>₹{discountValue}</p>
              </h1>

              <h1 className="p-2 flex justify-between font-bold text-gray-500 text-lg">
                Total Amount: <p>₹{TotalBill().toFixed(2)}</p>
              </h1>

              <div className="p-3">
                <h1 className="font-semibold text-gray-500">Discount</h1>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={(e) => HandleInputDis(e.target.value)}
                    className="border p-2 w-full my-2"
                  />
                  <p
                    className="text-xl  absolute right-[2.5rem]"
                    onClick={removeDisCount}
                  >
                    <MdDelete />
                  </p>
                </div>

                <div className="Coupons overflow-x-scroll flex justify-around  gap-2">
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center p-4 shrink-0 rounded-lg m-2"
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1">
                        {" "}
                        <RiDiscountPercentFill /> GRAB30
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center  rounded-lg m-2 p-4 shrink-0 "
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1 ">
                        {" "}
                        <RiDiscountPercentFill /> GRAB50
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center p-2 rounded-lg m-2 shrink-0"
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1">
                        {" "}
                        <RiDiscountPercentFill /> GRAB1000
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center p-2 rounded-lg m-2 shrink-0"
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1">
                        {" "}
                        <RiDiscountPercentFill /> GRAB100
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center p-2 rounded-lg m-2 shrink-0"
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1">
                        {" "}
                        <RiDiscountPercentFill /> GRAB100
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                  <div
                    className="border border-gray-200 bg-white flex flex-col items-center p-2 rounded-lg m-2 shrink-0"
                    style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
                  >
                    <p className="flex items-center gap-2">
                      <p>Coupon code:</p>
                      <span className="font-bold border-[2px] border-dotted border-black flex items-center p-1">
                        {" "}
                        <RiDiscountPercentFill /> GRAB100
                      </span>
                    </p>
                    <p>Save ₹100 with this offer </p>
                  </div>
                </div>
                <button
                  onClick={ApplyDiscount}
                  className="bg-blue-500 text-white p-2 rounded w-full"
                >
                  Apply Discount
                </button>
              </div>
            </div>
          </div>
          {overlay && (
            <div
              className="hidden w-full h-full fixed top-0 left-0 md:flex justify-center items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 60 }}
            >
              <p className="absolute right-[37%] top-[38%] text-white text-xl cursor-pointer">
                <TfiClose onClick={cancelRemove} />
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-lg font-semibold">Remove Item</h1>
                <p className="pt-3">
                  Are you sure you want to remove this item?
                </p>
                <div className="flex gap-3 pt-3">
                  <button
                    onClick={confirmRemove}
                    className="text-white bg-blue-800 p-3 rounded"
                  >
                    REMOVE
                  </button>
                  <button onClick={cancelRemove} className="border p-3 rounded">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
