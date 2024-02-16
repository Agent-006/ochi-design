import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 rounded-t-2xl">
      <div className="w-full px-10 border-b-2 border-b-[#D2D2D2]">
        <h1 className='text-6xl tracking-tight pt-16 pb-10 font-["Neue_Montreal"]'>
          Featured projects
        </h1>
      </div>
      <div className="px-20 py-10 h-screen">
        <div className="cards w-full flex gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-7xl font-bold tracking-tight font-['Founders Grotesk X-Cond']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-green-500 w-full h-full rounded-2xl hover:scale-95 duration-500 overflow-hidden">
              <img
                className="w-full h-full hover:scale-110 duration-1000"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-[#CDEA68] text-7xl font-bold tracking-tight font-['Founders Grotesk X-Cond']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-green-500 w-full h-full rounded-2xl hover:scale-95 duration-500 overflow-hidden">
              <img
                className="w-full h-full hover:scale-110 duration-1000"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
