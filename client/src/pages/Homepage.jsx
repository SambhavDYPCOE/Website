import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";

/* Google Analytics */
import ReactGA from "react-ga4";
const TRACKING_ID = "UA-257375779-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Homepage = () => {
  useEffect(() => {
    ReactGA.send("pageview");
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Homepage;
