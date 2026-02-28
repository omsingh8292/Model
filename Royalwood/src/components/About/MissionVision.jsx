import React from "react";

const MissionVision = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#faf7f2] via-white to-[#f3efe8] text-[#1a1a1a] relative overflow-hidden">
      
      {/* Soft Gold Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d4af37]/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#b68c2a] mb-6 tracking-wide">
          Our Purpose & Promise
        </h2>

        <div className="w-24 h-[3px] bg-[#b68c2a] mx-auto mb-20"></div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Mission Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[#e8dcc7] p-12 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-500">
            
            <h3 className="text-4xl font-serif font-semibold text-[#b68c2a] mb-6">
              Our Mission
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed font-light">
              To craft a refined sanctuary where the purity of nature 
              harmonizes with royal elegance — offering curated experiences,
              architectural excellence, and heartfelt hospitality that
              transforms every stay into a timeless memory.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[#e8dcc7] p-12 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-500">
            
            <h3 className="text-4xl font-serif font-semibold text-[#b68c2a] mb-6">
              Our Vision
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed font-light">
              To become an iconic symbol of wooden luxury —
              where sustainability, serenity, and sophistication
              redefine modern hospitality and set a new standard
              for immersive royal retreats.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;