import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import roomsData from "../components/Data/roomsData";

const RoomDetails = () => {

  const { id } = useParams();
  const room = roomsData.find((item) => item.id == id);

  if (!room) return <h1>Room Not Found</h1>;

  return (
    <div className="bg-[#e6f2ea] min-h-screen">

      <Navbar />

      <div className="flex">

        {/* LEFT COLUMN */}
        <div className="w-1/4 border-r border-black flex flex-col justify-center items-center p-10">

          {/* Gold Accent */}
          <div className="w-12 h-[3px] bg-yellow-600 mb-6"></div>

          <h1 className="text-3xl font-serif tracking-wide mb-4">
            Royal Wyonda
          </h1>

          <p className="text-gray-600 text-center leading-relaxed">
            Luxury hospitality crafted for comfort and elegance.
            Experience premium rooms and royal service.
          </p>

        </div>

        {/* ROOM SECTION */}
        <div className="flex-1 flex items-center justify-center p-10">

          <div className="bg-white rounded-xl shadow-xl w-[420px] overflow-hidden">

            <img
              src={room.image}
              alt={room.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">

              <h2 className="text-2xl font-semibold mb-2">
                {room.title}
              </h2>

              <p className="text-gray-500 mb-6">
                {room.price} / night
              </p>

              <button className="bg-black text-white px-7 py-2 rounded-md hover:bg-gray-800 transition">
                Book Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RoomDetails;