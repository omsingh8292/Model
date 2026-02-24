import React from "react";
import { FaMapMarkerAlt, FaCar, FaBusAlt, FaArrowRight } from "react-icons/fa";

const steps = [
  {
    title: "Location",
    desc: "Royal Woods is in serene Wayanad hills, surrounded by lush greenery.",
    icon: <FaMapMarkerAlt size={32} className="text-nature-moss mb-4" />,
  },
  {
    title: "By Car",
    desc: "3 hours drive from Mysore via scenic route.",
    icon: <FaCar size={32} className="text-nature-moss mb-4" />,
  },
  {
    title: "By Bus",
    desc: "Regular buses from Kozhikode, Mysore, and Bangalore.",
    icon: <FaBusAlt size={32} className="text-nature-moss mb-4" />,
  },
  {
    title: "Directions",
    desc: "Follow the map or GPS coordinates to reach us.",
    icon: <FaArrowRight size={32} className="text-nature-moss mb-4" />,
  },
];

const AboutCards = () => (
  /* Matching background with other sections */
  <section id="about" className="py-24 bg-nature-bg">
    <div className="container mx-auto text-center mb-16 px-4">
      {/* Font update: font-serif for consistent branding */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-deep">
        Find Us
      </h2>
      <p className="mt-4 text-nature-leaf font-sans text-lg tracking-wide">
        Everything you need to know about our resort
      </p>
      <div className="w-20 h-1 bg-nature-moss mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      {steps.map((step, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center border border-nature-moss/10"
        >
          {/* Icon using theme color */}
          <div className="p-4 bg-nature-soft/30 rounded-full mb-2">
            {step.icon}
          </div>

          {/* Font update: font-serif for card titles */}
          <h3 className="text-2xl font-serif font-semibold mb-3 text-nature-deep">
            {step.title}
          </h3>

          {/* Font update: font-sans for descriptions */}
          <p className="text-nature-deep/70 font-sans leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutCards;
