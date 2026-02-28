import React from "react";
import storyImg from "../../assets/about/story.jpg";

const StorySection = () => {
  return (
    <section className="bg-[#f8f5f0] text-[#1c1c1c] py-28">
      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={storyImg}
            alt="Royal Wood Wyonda Story"
            className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />

          {/* Decorative Gold Frame */}
          <div className="absolute -top-8 -left-8 w-full h-full border-2 border-[#d4af37] rounded-3xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Subtitle */}
          <p className="text-[#d4af37] uppercase tracking-[4px] mb-4 text-sm">
            Our Legacy
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Crafted From Nature. <br />
            Designed For Royalty.
          </h2>

          <div className="w-20 h-[2px] bg-[#d4af37] mb-8"></div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Royal Wood Wyonda was envisioned as more than a destination —
            it was imagined as a timeless retreat where luxury breathes
            alongside nature. Built with rich wooden textures and inspired
            by the quiet elegance of forest landscapes, our resort reflects
            harmony, sophistication, and authenticity.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Every villa is thoughtfully designed to blend natural warmth
            with contemporary refinement. Large open balconies welcome
            golden sunsets, handcrafted interiors evoke artisanal beauty,
            and serene pathways guide guests into a world untouched by
            the chaos of everyday life.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            At Royal Wood Wyonda, hospitality is not just service —
            it is a philosophy. We believe true luxury lies in the details:
            the scent of polished wood, the soft whisper of morning breeze,
            the glow of evening lights beneath starlit skies.
          </p>

          {/* Signature Quote */}
          <blockquote className="italic text-xl font-serif text-[#1c1c1c] border-l-4 border-[#d4af37] pl-6">
            “Here, every stay becomes a story worth remembering.”
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default StorySection;