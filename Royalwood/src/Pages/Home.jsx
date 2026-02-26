import React from "react";
import Navbar from "../components/Home/Navbar.jsx";
import Hero from "../components/Home/Hero.jsx";
import Gallery from "../components/Home/Gallery.jsx";
import AboutCards from "../components/Home/AboutCards.jsx";
import Room from "../components/Home/Room";
import Footer from "../components/Home/Footer.jsx";
import Reviews from "../components/Home/Reviews.jsx";

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
