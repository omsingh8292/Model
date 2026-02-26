
import React from "react";
import heroImg from "../../assets/services/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Overlay with gradient for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative text-center px-6 md:px-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
          Experience Royal Luxury
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200 drop-shadow-md">
          Royal Woods offers unparalleled services: from luxury stays and curated experiences 
          to exciting adventures and seasonal festivities, every moment is unforgettable.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Explore Services
        </button>
      </div>

      {/* Optional Decorative Overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default Hero;