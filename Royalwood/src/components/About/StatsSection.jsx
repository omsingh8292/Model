import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { number: 50, suffix: "+", label: "Luxury Wooden Villas" },
    { number: 10000, suffix: "+", label: "Delighted Guests" },
    { number: 20, suffix: "+", label: "Acres of Scenic Serenity" },
    { number: 5, suffix: "★", label: "Star Rated Excellence" },
  ];

  return (
    <section className="relative py-32 text-white overflow-hidden bg-gradient-to-br from-[#0f2e1c] via-[#111111] to-[#000000]">
      {/* Soft Gold Glow Background Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 md:px-20 text-center">
        {/* Small Subtitle */}
        <p className="text-[#d4af37] uppercase tracking-[5px] mb-4 text-sm">
          Our Excellence
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          A Legacy Defined <br /> By Distinction
        </h2>

        <div className="w-24 h-[2px] bg-[#d4af37] mx-auto mb-20"></div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#d4af37] transition duration-500"
            >
              {/* Decorative top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#d4af37] opacity-70 group-hover:w-20 transition-all duration-500"></div>

              <h3 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-4">
                <CountUp
                  end={stat.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
                {stat.suffix}
              </h3>

              <p className="text-gray-300 text-lg tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
