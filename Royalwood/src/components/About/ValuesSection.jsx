import React from "react";
import { Crown, Leaf, Sparkles, Heart } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Crown size={40} className="text-[#d4af37]" />,
      title: "Royal Hospitality",
      desc: "Every guest is treated with warmth, dignity, and personal attention — because true luxury begins with exceptional service.",
    },
    {
      icon: <Leaf size={40} className="text-[#d4af37]" />,
      title: "Harmony With Nature",
      desc: "Our architecture and environment celebrate sustainability, blending natural beauty with refined elegance.",
    },
    {
      icon: <Sparkles size={40} className="text-[#d4af37]" />,
      title: "Refined Luxury",
      desc: "From handcrafted interiors to premium amenities, every detail reflects timeless sophistication.",
    },
    {
      icon: <Heart size={40} className="text-[#d4af37]" />,
      title: "Serenity & Privacy",
      desc: "Private villas and tranquil spaces designed to offer peace, exclusivity, and unforgettable moments.",
    },
  ];

  return (
    <section className="bg-[#0f2e1c] text-white py-28">
      <div className="container mx-auto px-6 md:px-20 text-center">

        {/* Section Heading */}
        <p className="text-[#d4af37] uppercase tracking-[4px] mb-4 text-sm">
          Our Core Values
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          The Principles That Define Us
        </h2>

        <div className="w-24 h-[2px] bg-[#d4af37] mx-auto mb-16"></div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-[#d4af37] transition duration-300 shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {value.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;