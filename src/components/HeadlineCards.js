import React from "react";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 04/10</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
          src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Kebabs</p>
          <p className="px-2">Added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
          src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Desserts Delivered</p>
          <p className="px-2">Tasty treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded"
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>
    </div>
  );
}

export default HeadlineCards;

