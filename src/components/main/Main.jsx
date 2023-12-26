// import React from "react";
import "./Main.scss";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Follow from "./follow/Follow";
import Articles from "./articles/Articles";
import Contact from "./contact/Contact";

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Follow />
      <Articles />
      <Contact />
    </>
  );
};

export default Main;
