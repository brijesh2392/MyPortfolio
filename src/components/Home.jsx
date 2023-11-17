import React from "react";
import ProfileSection from "./ProfileSection";
import About from "./About";
import Project from "./ProjectSection/Project";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <ProfileSection />
      <About />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  );
};

export default Home;
