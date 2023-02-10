import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/common/Button/Button";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Faq from "../src/components/Faq/Faq";
import Landing from "../src/components/Landing/Landing";

const App = () => {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      > */}
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:eventId" element={<Team />} />
          <Route path="/leaderboard/:eventId" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />}></Route> */}
          <Route path="/" element={<Landing />}></Route> 
          <Route path="/" element={<Faq />}></Route> 
        </Routes>
        <Footer/>
        {/* <Button /> */}
      {/* </div> */}
    </>
  );
};

export default App;
