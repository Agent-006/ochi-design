import React from "react";
import { Landing, Marquee, Navbar } from "./components";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] text-black">
      <Navbar />
      <Landing />
      <Marquee />
    </div>
  );
}

export default App;
