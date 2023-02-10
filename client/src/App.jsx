import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/common/Button/Button";

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Routes>
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:eventId" element={<Team />} />
          <Route path="/leaderboard/:eventId" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        <Button />
      </div>
    </>
  );
};

export default App;
