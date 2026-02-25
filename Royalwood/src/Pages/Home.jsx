import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";
import AboutCards from "../components/AboutCards.jsx";
import Room from "../components/Room";
import Footer from "../components/Footer.jsx";
import Reviews from "../components/Reviews.jsx";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Gallery />
      <Room />
      <AboutCards />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
