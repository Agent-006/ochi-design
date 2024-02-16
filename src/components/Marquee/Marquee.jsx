import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" className="w-full py-20 bg-[#004D43] rounded-t-2xl text-white">
      <div className="text border-t-2 border-b-2 border-[#4D837C] flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[18vw] leading-none font-['Founders Groutesk X-Cond] font-semibold uppercase pr-10 -mt-[3vw] -mb-[1vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[18vw] leading-none font-['Founders Groutesk X-Cond] font-semibold uppercase pr-10 -mt-[3vw] -mb-[1vw]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
