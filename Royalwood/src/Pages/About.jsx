import React from "react";
import Navbar from "../components/Home/Navbar";
import AboutHero from "../components/About/AboutHero";
import StorySection from "../components/About/StorySection";
import ValuesSection from "../components/About/ValuesSection";
import ArchitectureSection from "../components/About/ArchitectureSection";
import StatsSection from "../components/About/StatsSection";
import MissionVision from "../components/About/MissionVision";
import Footer from "../components/Home/Footer";

const About = () => {
  return (
    <div className="bg-[#0f2e1c] text-white">
      <Navbar />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <ArchitectureSection />

      <StatsSection />
      <MissionVision />
<Footer/>
     
    </div>
  );
};

export default About;
