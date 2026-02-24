import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // visible if scrolling up OR at the very top
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
        
        {/* Logo - Matches your premium Serif style */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-nature-deep tracking-tight">
          Royal <span className="italic text-nature-moss">Woods</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {["Home", "Gallery", "Rooms", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-nature-deep font-sans text-sm font-bold uppercase tracking-[0.2em] hover:text-nature-moss transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#rooms" 
            className="bg-forest text-white px-6 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-nature-deep transition-all shadow-md"
          >
            LOG IN
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-nature-deep p-2">
            <span className="text-3xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-nature-bg border-b border-nature-moss/10 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6">
          {["Home", "Gallery", "Rooms", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-nature-deep font-sans text-lg font-bold uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;