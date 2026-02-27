import React from "react";
import Navbar from "../components/Home/Navbar.jsx";
import Footer from "../components/Home/Footer.jsx";

const About = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow text-center py-40">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="mt-6 text-xl">Welcome to Royal Woods Resort!</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;