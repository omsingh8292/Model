import React from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";

const rooms = [
  { name: "Premium Room", img: room1, desc: "Luxurious room with forest view.", price: "₹8,500 / night" },
  { name: "Deluxe Room", img: room2, desc: "Comfortable stay with modern amenities.", price: "₹6,500 / night" },
  { name: "Suite Room", img: room3, desc: "Spacious suite with private balcony.", price: "₹10,000 / night" },
  { name: "Standard Room", img: room4, desc: "Cozy and affordable with basic facilities.", price: "₹4,500 / night" },
];

const Rooms = () => (
  /* Changed bg-gray-50 to bg-nature-bg */
  <section id="rooms" className="py-24 bg-nature-bg">
    <div className="container mx-auto text-center mb-16 px-4">
      {/* Font update: font-serif for titles */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-deep">
        Our Rooms
      </h2>
      <p className="mt-4 text-nature-leaf font-sans text-lg tracking-wide">
        Choose your stay with comfort and luxury
      </p>
      <div className="w-20 h-1 bg-nature-moss mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      {rooms.map((room, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden border border-nature-moss/10"
        >
          {/* Image with slight hover zoom */}
          <div className="overflow-hidden h-64">
            <img 
              src={room.img} 
              alt={room.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            {/* Font update: font-serif for room names */}
            <h3 className="text-2xl font-serif font-semibold mb-2 text-nature-deep">
              {room.name}
            </h3>
            {/* Font update: font-sans for descriptions */}
            <p className="text-nature-deep/70 flex-grow font-sans leading-relaxed">
              {room.desc}
            </p>
            {/* Color update: text-forest for the price */}
            <p className="mt-6 font-bold text-forest text-xl font-sans tracking-tight">
              {room.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Rooms;