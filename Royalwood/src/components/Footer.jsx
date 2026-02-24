import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">Royal Woods</h3>
        <p className="text-gray-400 mb-4">© 2026 Royal Woods. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/royal_woods_wayanad/" target="_blank" rel="noreferrer" className="hover:text-green-500">Instagram</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;