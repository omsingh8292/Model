import React from "react";
import heroImg from "../../assets/Services/hero1.jpg";
import { FaCrown, FaSpa, FaHiking } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-black overflow-hidden pt-28 lg:pt-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Royal Woods Services"
          className="w-full h-full object-cover brightness-110 contrast-105"
        />
        {/* Lighter overlay for clarity */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-white">

        <span className="tracking-[0.35em] uppercase text-sm text-yellow-300 font-semibold">
          Premium Experiences
        </span>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mt-6">
          Discover{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700">
            Royal Woods Services
          </span>
        </h1>

        {/* GOLD DIVIDER */}
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 mb-6 rounded-full"></div>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Indulge in curated luxury stays, rejuvenating spa rituals,
          thrilling forest adventures, and unforgettable celebrations —
          crafted for those who seek elegance beyond expectations.
        </p>

        {/* FEATURES */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-white">

          <div className="flex items-center justify-center gap-3">
            <FaCrown className="text-yellow-400 text-xl" />
            <span>5-Star Luxury Comfort</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaSpa className="text-yellow-400 text-xl" />
            <span>World-Class Spa Retreat</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaHiking className="text-yellow-400 text-xl" />
            <span>Exclusive Nature Adventures</span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105 shadow-xl">
            Explore Services
          </button>

          <button className="border border-yellow-300 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition">
            Book Now
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;