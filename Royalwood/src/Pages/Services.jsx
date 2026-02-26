import React from "react";
import luxuryImg from "../assets/Services/luxuryImg.jpg";
import adventureImg from "../assets/Services/adventureImg.jpg";
import spaImg from "../assets/Services/spaImg.jpg";
import { FaBed, FaMountain, FaSpa } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Luxury Stay",
    img: luxuryImg,
    desc: "Enjoy the finest rooms with breathtaking views.",
    icon: <FaBed className="text-blue-600 text-3xl mb-2" />,
  },
  {
    id: 2,
    title: "Adventure Tour",
    img: adventureImg,
    desc: "Thrilling outdoor activities for all ages.",
    icon: <FaMountain className="text-green-600 text-3xl mb-2" />,
  },
  {
    id: 3,
    title: "Spa & Relaxation",
    img: spaImg,
    desc: "Rejuvenate with our world-class spa services.",
    icon: <FaSpa className="text-pink-600 text-3xl mb-2" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center text-center">
        <img
          src={luxuryImg}
          alt="Hero"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="z-10 text-white">
          <h1 className="text-5xl font-bold mb-2">Our Services</h1>
          <p className="text-xl">Luxury, Adventure & Relaxation all in one place</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-500"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              {service.icon}
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;