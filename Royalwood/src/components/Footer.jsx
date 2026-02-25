import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
<footer id="contact" className="footer-bg text-white pt-12 pb-6 relative">
      {/* GLASS OVERLAY */}
      <div className="glass absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-4xl font-serif font-bold">
            Royal <span className="italic text-green-400">Woods</span>
          </h2>
          <p className="text-green-200 mt-4 text-sm leading-relaxed">
            A luxury forest resort surrounded by nature, peace and premium comfort.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            <li>Home</li>
            <li>Gallery</li>
            <li>Rooms</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
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

       

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="relative mt-12 text-center">
        <a
          href="https://www.instagram.com/royal_woods_wayanad/"
          target="_blank"
          className="inline-block bg-green-600 p-3 rounded-full hover:bg-green-500 transition"
        >
          <FaInstagram size={22} />
        </a>

        <p className="mt-6 text-green-300 text-sm">
          © 2026 Royal Woods Resort. All rights reserved.
        </p>
      </div>

     

    </footer>
  );
};

export default Footer;