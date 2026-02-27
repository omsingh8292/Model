import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-green-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-200">
            Royal <span className="italic text-green-400">Woods</span>
          </h2>
          <p className="text-green-200 mt-4 text-sm md:text-base leading-relaxed">
            A luxury forest resort surrounded by nature, peace, and premium comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-300">Quick Links</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="hover:text-green-400 cursor-pointer transition">Home</li>
            <li className="hover:text-green-400 cursor-pointer transition">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer transition">Rooms</li>
            <li className="hover:text-green-400 cursor-pointer transition">Reviews</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-300">Contact</h3>
          <p className="flex items-center gap-2 text-green-200 text-sm">
            <FaMapMarkerAlt /> Wayanad, Kerala, India
          </p>
          <p className="flex items-center gap-2 mt-2 text-green-200 text-sm">
            <FaPhoneAlt /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 mt-2 text-green-200 text-sm">
            <FaEnvelope /> contact@royalwoods.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-300">Follow Us</h3>
          <a
            href="https://www.instagram.com/royal_woods_wayanad/"
            target="_blank"
            className="inline-block bg-green-600 p-3 rounded-full hover:bg-green-500 transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-green-300 text-sm">
        © 2026 Royal Woods Resort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;