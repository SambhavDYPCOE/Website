import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";

const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  useEffect(() => {});

  return (
    <>
      <div className={classes.events_section}>
        {eventsData.map((eventData, i) => {
          return <EventCard eventData={eventData} key={i} />;
        })}
      </div>
    </>
  );
};

export default MainEvents;
