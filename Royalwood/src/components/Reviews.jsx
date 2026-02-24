import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Arjun Mehta",
    text: "An absolute slice of heaven. The forest views from the Premium Room are breathtaking. Truly a royal experience.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    text: "The perfect escape from the city. The service is impeccable, and the local cuisine is a must-try!",
    rating: 5,
  },
  {
    name: "Rohan Das",
    text: "Waking up to the sound of birds and the mist over the hills was magical. Highly recommend the nature walks.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-nature-bg border-t border-nature-moss/10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-nature-moss font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Guest Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-nature-deep mb-4">
            Voices of <span className="italic">Nature</span>
          </h2>
          <div className="w-20 h-1 bg-nature-moss mx-auto rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-nature-moss/5 flex flex-col items-center text-center"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-6 text-golden">
                {[...Array(rev.rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-nature-soft mb-4" size={24} />

              {/* Review Text - Serif for a literary/premium feel */}
              <p className="font-serif italic text-lg text-nature-deep/80 leading-relaxed mb-8">
                "{rev.text}"
              </p>

              {/* Name - Clean Sans font */}
              <div className="mt-auto">
                <p className="font-sans font-bold uppercase tracking-widest text-sm text-nature-deep">
                  {rev.name}
                </p>
                <p className="text-nature-moss text-xs mt-1">Verified Guest</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;