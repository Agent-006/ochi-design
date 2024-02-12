import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] rounded-t-2xl text-white">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1 className="text-[18vw] leading-none font-['Founders Groutesk X-Cond] font-semibold uppercase -mt-10">
          we are ochi
        </h1>
        <h1 className="text-[18vw] leading-none font-['Founders Groutesk X-Cond] font-semibold uppercase -my-10">
          we are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
