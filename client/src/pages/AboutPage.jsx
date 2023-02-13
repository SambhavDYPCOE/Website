import React from "react";
import About from "../components/About/About";
import EventSection from "../components/EventSection/EventSection";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <div className={classes.about_page}>
        <About />
        <EventSection />
      </div>
    </>
  );
};

export default AboutPage;
