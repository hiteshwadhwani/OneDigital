"use client";

import ArrowButton from "@/components/ui/ArrowButton";

const WhatWeDo = () => {
  return (
    <div className="h-[100vh] w-full py-[95px] bg-black text-white ">
      <div className="flex flex-row gap-x-[1px] bg-white h-full w-full border-y border-white">
        <div className="w-[40%] bg-black text-[120px] flex items-center justify-center leading-[92.523%] customFont font-normal">
          What <br />
          we do?
        </div>
        <div className="flex-1 grid grid-rows-3 gap-y-[1px] bg-white">
          <div className="customFont bg-black text-[60px] flex items-center justify-between px-[100px] hover:cursor-pointer hover:opacity-80 transition">Website Design <ArrowButton className="bg-[#84EDFF]" /></div>
          <div className="customFont bg-black text-[60px] flex items-center justify-between px-[100px] hover:cursor-pointer hover:opacity-80 transition">Website Development <ArrowButton className="bg-[#CDFF00]" /></div>
          <div className="customFont bg-black text-[60px] flex items-center justify-between px-[100px] hover:cursor-pointer hover:opacity-80 transition">Social media <ArrowButton className="bg-[#FF00AA]" /></div>
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
