import React from "react";

const RoomCards = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                    hover:shadow-2xl transition duration-300 
                    transform hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          className="w-full h-60 object-cover"
        />

        {/* Price Badge */}
        <span className="absolute top-4 right-4 
                         bg-black text-white 
                         px-3 py-1 rounded-full text-sm">
          {data.price}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {data.title}
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          Luxury comfort with modern royal design and premium amenities.
        </p>

        <button className="w-full bg-black text-white py-2 rounded-lg 
                           hover:bg-gray-800 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCards;