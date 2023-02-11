import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/common/Button/Button";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import MainEvents from "./components/MainEvents/MainEvents";
import Faq from "../src/components/Faq/Faq";
import Homepage from "./pages/Homepage";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";

const App = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 500,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  useEffect(() => {});
  return (
    <>
      {/* <div
        // id={swup}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "auto",
        }}
      > */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<MainEvents />} />
        <Route path="/events/:eventId" element={<MainEvents />} />
        {/*  <Route path="/contact" element={<Contact />} />
          <Route path="/leaderboard/:eventId" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />}></Route> */}
        {/* <Route path="/" element={<Landing />}></Route>  */}
        {/* <Route path="/" element={<Faq />}></Route>  */}
      </Routes>
      <Footer />
      {/* <Button /> */}
      {/* </div> */}
    </>
  );
};

export default App;
