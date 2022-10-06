import React, { useState } from "react";
import { data } from "../data/data";
import OrderDetails from "./OrderDetails";
function Food() {
  const [foods, setFoods] = useState(data);
  const [showOrder, setShowOrder] = useState(false);
  const [saveItem, setSaveItem] = useState(null);


  // Filter by  types-burgers, pizza, etc..

  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };
  // Filter by  prices
  const filterPrice = (minPrice, maxPrice) => {
    setFoods(
      data.filter(
        (item) => Number(item.price) > minPrice && Number(item.price) < maxPrice
      )
    );
  };

  function handOrderDetails(item){
    setShowOrder(true)
    setSaveItem(item)
  }

  return (
    <>
      {" "}
      <div
        className="max-w-[1640px] mx-auto px-4 py-12"
     
      >
        <h1 className="text-orange-600 font-bold text-4xl text-center mb-10">
          Top Rated Menu Items
        </h1>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Filter Type */}
          <div>
            <p className="font-bold text-gray-700">Filter Type</p>
            <div className="flex justify-between flex-wrap mt-2">
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterType("pizza")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Pizza
              </button>
              <button
                onClick={() => filterType("burger")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Burgers
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Chickens
              </button>
              <button
                onClick={() => filterType("salad")}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Salads
              </button>
            </div>
          </div>
          {/* Filter Price */}
          <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className="flex justify-between max-w-[500px] w-full mt-2">
              <button
                onClick={() => filterPrice(0, 20)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                0-20$
              </button>
              <button
                onClick={() => filterPrice(21, 40)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                20-40$
              </button>
              <button
                onClick={() => filterPrice(41, 60)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                40-60$
              </button>
              <button
                onClick={() => filterPrice(61, 100)}
                className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                60-100$
              </button>
            </div>
          </div>
        </div>

        {/* Diplay Foods */}
        {showOrder ? <OrderDetails setShowOrder={setShowOrder} saveItem={saveItem} /> : ""}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"   >
          {foods.map((item) => {
            return (
              <div
                key={item.id}
                className="border shadow-lg rounded-lg hover:scale-105 duration-300"
                onClick={() => handOrderDetails(item)}
              >
                <img
                  className="w-full h-[200px] object-cover rounded-t-lg"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold">{item.name}</p>
                  <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      {item.price}$
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
      
    </>
  );
}

export default Food;
