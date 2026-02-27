import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true); // ✅ fixed typo
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
      className={`fixed w-full z-50 transition-transform duration-500 bg-nature-bg/80 backdrop-blur-md border-b border-nature-moss/10 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-3xl font-serif font-bold text-nature-deep">
          Royal <span className="italic text-nature-moss">Woods</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="nav-link">Home</Link> {/* ✅ changed to "/" */}
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About</Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-forest text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-nature-deep transition"
          >
            Login
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-nature-deep text-3xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-nature-bg border-b border-nature-moss/10 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6">
          <Link to="/" onClick={() => setOpen(false)} className="nav-link-mobile">
            Home
          </Link>

          <Link to="/services" onClick={() => setOpen(false)} className="nav-link-mobile">
            Services
          </Link>

          <Link to="/about" onClick={() => setOpen(false)} className="nav-link-mobile">
            About
          </Link>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-forest text-white px-6 py-2 rounded-full text-center font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;