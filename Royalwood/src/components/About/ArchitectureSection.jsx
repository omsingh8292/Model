import React from "react";
import archImg from "../../assets/about/architecture.jpg";

const ArchitectureSection = () => {
  return (
    <section className="bg-[#f8f5f0] py-32 text-[#1c1c1c]">
      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#d4af37] uppercase tracking-[4px] mb-4 text-sm">
            Architecture & Design
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Where Modern Luxury <br /> Embraces Natural Beauty
          </h2>

          <div className="w-20 h-[2px] bg-[#d4af37] mb-8"></div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Royal Wood Wyonda, architecture is not merely structure —
            it is storytelling carved in timber and glass. Our resort is
            thoughtfully designed to blend contemporary refinement with
            the organic warmth of natural wood.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Expansive glass walls invite sunlight to dance through every
            space, while handcrafted wooden textures echo the quiet
            elegance of surrounding forests. Each villa flows seamlessly
            between indoor comfort and outdoor serenity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Inspired by sustainable principles, our design preserves
            nature’s beauty while elevating it through sophisticated
            craftsmanship and timeless aesthetics.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={archImg}
            alt="Royal Wood Architecture"
            className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />

          {/* Elegant Gold Frame */}
          <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-[#d4af37] rounded-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default ArchitectureSection;