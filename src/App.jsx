import React from "react";
import {
  About,
  Cards,
  Eyes,
  Featured,
  Footer,
  Landing,
  Marquee,
  Navbar,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] text-black ">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
