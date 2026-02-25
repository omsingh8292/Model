import React from "react";
import heroImg from "../assets/hero.jpg";
import { FaLeaf, FaMapMarkedAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-28 lg:pt-20">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          className="w-full h-full object-cover"
          alt="Resort Background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* LEFT CONTENT ONLY */}
      <div className="relative z-10 max-w-2xl px-8 lg:px-20 text-white">

        <span className="tracking-[0.3em] uppercase text-sm text-green-300 font-semibold">
          Luxury Forest Retreat
        </span>

        <h1 className="text-5xl lg:text-7xl font-serif leading-tight mt-4">
          Welcome to <br />
          <span className="italic text-green-400">Royal Woods</span>
        </h1>

        <p className="text-white/80 text-lg lg:text-xl mt-6">
          Experience premium luxury in the heart of nature.  
          Relax, explore, and rejuvenate in pure forest serenity.
        </p>

        {/* FEATURES */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
            <FaLeaf className="text-green-400 text-xl" />
            <span>Luxury Rooms with Forest View</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-green-400 text-xl" />
            <span>Nature Walks & Adventure Trails</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a className="bg-green-600 hover:bg-green-800 px-8 py-4 rounded-full text-lg font-semibold transition">
            Book Your Stay
          </a>

          <a className="border border-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition">
            Explore More
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;