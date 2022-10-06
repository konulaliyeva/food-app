import React from "react";
import { AiOutlineClose, AiOutlineStar } from "react-icons/ai";

function OrderDetails({ setShowOrder, saveItem }) {
  return (
    <div className="max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        <div className="w-[600px] h-[550px] absolute left-[90%] z-50 top-40 bg-white rounded-xl text-gray-800 flex flex-col p-5">
          <AiOutlineClose
            size={25}
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setShowOrder(false)}
          />

          <h1 className="text-center mb-5 font-bold">{saveItem.name}</h1>

          <div>
            <img
              src={saveItem.image}
              alt={saveItem.name}
              className="w-[250px] h-[150px] mx-36 rounded-lg"
            />
            <p className="m-5 align-center">{saveItem.ingridients}</p>
            <div className="flex flex-row ">
              <div className="p-5 w-full">
                <p className="mx-10 mb-3 flex flex-row items-center">
                  Rate: {saveItem.rating} <AiOutlineStar color="gray" />
                </p>
                <p className="mx-10 mb-10">Price: {saveItem.price}$ </p>
              </div>
              <div className="p-5 w-full">
                <p className="mb-3 ">Category: {saveItem.category} </p>
                <p className="mb-10">Duration: {saveItem.duration}</p>
              </div>
            </div>
            <div>
            <button className="border-[#ff6600]/70 bg-white text-[#ff6600] mx-2 absolute bottom-4 right-10">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
