import React from 'react'

const Overlay = () => {
  return (
    <div>
          <div
          className=" w-[100%] h-[100vh] flex justify-center items-center  top-0 z-40 fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}
        >
          <div className="border bg-white  p-6">
            <h1>Remove Item</h1>
            <p className="pt-3">Are you sure you want to remove this item?</p>
            <div className="flex gap-3 pt-3">
              <button
                onClick={confirmRemove}
                className="text-white bg-blue-800 p-3"
              >
                REMOVE
              </button>
              <button onClick={cancelremove} className="border bg-white p-3">
                CANCEL
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overlay