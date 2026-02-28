import React from "react";
import heroImg from "../../assets/about/hero.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#44311b] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <h1 className="font-serif text-5xl">
            {" "}
            Experience Royal Living <br />
            <span className="text-[#d4af37]">At Royal Wood Wyonda</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Nestled in the heart of nature, Royal Wood Wyonda is a sanctuary
            crafted for those who seek elegance, tranquility, and timeless
            luxury.
          </p>

          <p className="text-gray-400 mb-8">
            From handcrafted wooden villas to breathtaking forest views, every
            detail is designed to immerse you in comfort, exclusivity, and
            unforgettable experiences.
          </p>

          <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
            Discover Our Story
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Royal Wood Wyonda"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          {/* Decorative Gold Border */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d4af37] rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
