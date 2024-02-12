import { ArrowUpRight } from "lucide-react";
import React from "react";

function Landing() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentation"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="w-[8vw] h-[5vw] bg-green-500 relative mr-[1vw] rounded-md"></div>
              )}
              <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders Grotesk X-Cond'] font-bold">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-xl font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 rounded-full border-[1px] font-light border-zinc-600 uppercase">
            start the project
          </div>
          <div className="p-2 border-[1px] font-light border-zinc-600 rounded-full">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
