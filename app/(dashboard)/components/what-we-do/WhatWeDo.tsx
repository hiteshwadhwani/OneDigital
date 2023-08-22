"use client";

import ArrowButton from "@/components/ui/ArrowButton";

const WhatWeDo = () => {
  return (
    <div className="h-[100vh] w-full py-[95px] bg-black text-white ">
      <div className="flex flex-col md:flex-row gap-y-[1px] gap-x-[1px] bg-white h-full w-full border-y border-white">
        <div className="md:w-[40%] py-[34px] md:py-0 bg-black text-[50px] md:text-[120px] flex items-center justify-center leading-[92.523%] font-normal">
          What <br className="hidden md:block" />
          we do?
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-rows-3 gap-y-[1px] bg-white">
          <div className=" bg-black text-[35px] md:text-[60px] flex items-center justify-between px-[20px] md:px-[100px] hover:cursor-pointer hover:opacity-80 transition">
            Website Design <ArrowButton className="bg-[#84EDFF] w-[50px] h-[50px] md:h-[100px] md:w-[100px]" rotate />
          </div>
          <div className=" bg-black text-[35px] md:text-[60px] flex items-center justify-between  px-[20px] md:px-[100px] hover:cursor-pointer hover:opacity-80 transition">
            Website Development <ArrowButton className="bg-[#CDFF00] w-[50px] h-[50px] md:h-[100px] md:w-[100px]" rotate />
          </div>
          <div className=" bg-black text-[35px] md:text-[60px] flex items-center justify-between  px-[20px] md:px-[100px] hover:cursor-pointer hover:opacity-80 transition">
            Social media <ArrowButton className="bg-[#FF00AA] w-[50px] h-[50px] md:h-[100px] md:w-[100px]" rotate />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
