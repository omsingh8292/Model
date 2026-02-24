import React from "react";
import heroImg from "../assets/hero.jpg";
import { FaStar, FaLeaf, FaMapMarkedAlt, FaUtensils } from "react-icons/fa";

const Hero = () => {
  return (
    /* Added pt-28 for mobile and lg:pt-20 for desktop to clear the fixed navbar */
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center bg-nature-bg overflow-hidden pt-28 lg:pt-20">
      
      {/* Left Side - Image with a 'Framed' Look */}
      <div className="lg:w-1/2 h-[50vh] lg:h-[80vh] relative p-6 lg:p-12">
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={heroImg}
            alt="Royal Woods Resort"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-deep/40 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
            <FaStar className="text-golden" />
            <span className="text-nature-deep font-semibold text-sm tracking-wide uppercase">
              Top Rated Resort
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Luxury Typography */}
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-12 lg:py-0">
        <span className="text-nature-leaf font-bold tracking-[0.2em] uppercase text-xs mb-4">
          Escape to Tranquility
        </span>

        <h1 className="text-5xl lg:text-7xl font-serif text-nature-deep leading-tight mb-6">
          Welcome to <br />
          <span className="italic text-nature-moss">Royal Woods</span>
        </h1>

        <p className="text-nature-deep/80 text-lg lg:text-xl mb-8 font-sans leading-relaxed max-w-lg">
          Experience serene luxury amidst the lush forests of Wayanad. Relax,
          explore, and rejuvenate where nature meets elegance.
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-nature-soft rounded-lg group-hover:bg-nature-moss transition-colors">
              <FaLeaf className="text-nature-deep group-hover:text-white" />
            </div>
            <span className="text-nature-deep font-medium font-sans">
              Premium Rooms & Stunning Views
            </span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-nature-soft rounded-lg group-hover:bg-nature-moss transition-colors">
              <FaMapMarkedAlt className="text-nature-deep group-hover:text-white" />
            </div>
            <span className="text-nature-deep font-medium font-sans">
              Nature Walks & Adventure
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#booking"
            className="bg-forest hover:bg-nature-deep text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all hover:-translate-y-1 active:scale-95 font-sans"
          >
            Book Your Stay
          </a>
          <a
            href="#explore"
            className="border-2 border-forest text-forest hover:bg-forest hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all font-sans"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;