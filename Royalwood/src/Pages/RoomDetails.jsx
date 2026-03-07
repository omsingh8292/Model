import React from "react";
import { useParams } from "react-router-dom";
import roomsData from "../components/Data/roomsData";
import RoomBookingCard from "../components/RoomBookingCard";

const RoomDetails = () => {

  const { id } = useParams();
  const room = roomsData.find((item) => item.id == id);

  return (

    <div className="bg-[#e9f4ec] min-h-screen">

      {/* Navbar */}

      <div className="bg-white shadow px-10 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-900">
          Royal Wyonda
        </h1>

        <div className="flex gap-8 text-gray-600">
          <p className="cursor-pointer hover:text-green-700">Home</p>
          <p className="cursor-pointer hover:text-green-700">Rooms</p>
          <p className="cursor-pointer hover:text-green-700">Services</p>
          <p className="cursor-pointer hover:text-green-700">Contact</p>
        </div>

      </div>


      {/* Page Section */}

      <div className="flex">

        {/* Left Panel */}

        <div className="w-1/4 border-r border-black/20 p-10">

          <h2 className="text-3xl font-semibold">
            Royal Wyonda
          </h2>

          <p className="text-gray-600 mt-4">
            Where luxury meets elegance.
            Experience unforgettable stays with
            royal comfort and premium hospitality.
          </p>

          {room && (

            <div className="mt-10">

              <h3 className="text-xl font-semibold">
                {room.title}
              </h3>

              <p className="text-gray-500 mt-2">
                Elegant room designed for ultimate
                relaxation and comfort.
              </p>

              <p className="font-bold text-lg mt-4">
                {room.price}
              </p>

            </div>

          )}

        </div>


        {/* Right Section */}

        <div className="flex-1 flex justify-center items-center p-12">

          <RoomBookingCard room={room} />

        </div>

      </div>

    </div>

  );
};

export default RoomDetails;