import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.07" className="w-full py-20 px-20 bg-[#CDEA68] rounded-t-2xl text-black">
      <h1 className="font-['Neue Montreal'] text-5xl tracking-tight">
        Ochi is a strategic partner for fast-growing tech <br /> businesses that
        need to raise funds, sell products, <br /> explain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full border-t-[1px] pt-5 border-zinc-600 mt-20 flex gap-5">
        <div className="w-1/2">
          <h1 className="text-6xl font-['Neue Montreal'] tracking-tighter">
            Our approach:
          </h1>
          <button className="flex items-center gap-10 justify-center px-6 py-4 mt-5 bg-zinc-900 rounded-full text-white uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-xl bg-[#a7bc5d] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
