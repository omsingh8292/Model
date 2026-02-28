import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-xl border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex-1">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Royal <span className="italic text-[#b68c2a]">Woods</span>
          </h1>
        </div>

        {/* CENTER MENU (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-10">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/about" className="nav-item">About</Link>
        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-[#b68c2a] text-white font-semibold hover:bg-black transition duration-300"
          >
            Login
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-gray-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <Link to="/" onClick={() => setOpen(false)} className="mobile-item">
            Home
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="mobile-item">
            Services
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="mobile-item">
            About
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full bg-[#b68c2a] text-white font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;