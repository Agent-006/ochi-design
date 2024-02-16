import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 px-20">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-2xl w-full h-full bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-6 border-2 border-[#C4E366] rounded-full px-3 py-1 text-[#C4E366] ">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardContainer  h-[50vh] w-1/2">
        <div className="card w-full h-full flex gap-5">
          <div className="card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute left-8 bottom-8 uppercase border-2 border-[#F1F1F1] rounded-full px-3 py-1 text-[#F1F1F1]">
              rating 5.0 on clutch
            </button>
          </div>
          <div className="card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]">
            <img
              className="h-28"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute left-8 bottom-8 uppercase border-2 border-[#F1F1F1] rounded-full px-3 py-1 text-[#F1F1F1]">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
