"use client";

import MyCarousel from "./MyCarousel";

const WhatPeopleSay = () => {
  return (
    <div className="h-[100vh] bg-black flex flex-col">
      {/* heading */}
      <h1 className="text-[60px] md:text-[100px] text-center text-white font-light pt-[100px]">
        See What People Say?
      </h1>
      <div className="flex-1 pt-[50px]">
        <MyCarousel />
      </div>
    </div>
  );
};
export default WhatPeopleSay;
