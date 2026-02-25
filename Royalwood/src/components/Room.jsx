import React from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";

const rooms = [
  { img: room1, title: "Deluxe Room", price: "₹2,500 / night" },
  { img: room2, title: "Premium Room", price: "₹3,500 / night" },
  { img: room3, title: "Luxury Suite", price: "₹5,000 / night" },
  { img: room4, title: "Royal Suite", price: "₹8,000 / night" },
];

const Room = () => {
  return (
    <section id="rooms" className="py-16 bg-gray-50 font-serif">
      <h2 className="text-3xl font-bold text-center mb-10">Our Rooms</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            
            <img 
              src={room.img} 
              alt={room.title} 
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-green-600 font-bold mt-2">{room.price}</p>

              <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-green-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Room;