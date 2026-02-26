import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Amit Sharma",
    text: "We stayed here for 2 nights and it was amazing. The rooms were clean, staff was polite, and the forest view was beautiful. Worth the price.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    text: "Very peaceful place. Perfect for family trips. Food was good and the ambience was relaxing. Will definitely visit again.",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    text: "Loved the nature vibe and cottages. Great place to relax away from city noise. Staff was helpful and friendly.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-[#cfd5cf]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#1f3d2b]">
            Guest Reviews
          </h2>
          <p className="text-[#2f5d44] mt-2">What our guests say about Royal Woods</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">

              {/* Stars */}
              <div className="flex mb-3 text-yellow-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Quote */}
              <FaQuoteLeft className="text-gray-300 mb-2" size={20} />

              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {rev.text}
              </p>

              <p className="font-bold text-[#1f3d2b] text-sm">{rev.name}</p>
              <p className="text-gray-400 text-xs">Verified Guest</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;