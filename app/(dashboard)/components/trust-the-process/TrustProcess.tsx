"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TrustProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-[100vh] pt-5 flex flex-col">
      <div
        className="text-[70px] md:text-[130px] leading-[96.523%]"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-row gap-x-4">
          TRUST{" "}
          <Image
            src={"/images/Star2.svg"}
            width={127}
            height={127}
            alt="star"
            className="hidden md:block"
          />
        </div>
        THE PROCESS
      </div>
      <div
        className="flex-1"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[1px] bg-white w-full h-full">
          <div className="flex flex-col gap-y-[20px] items-start justify-center bg-black text-white">
            <div className="w-[70%] py-12 px-12">
              <div className="w-[80px] h-[80px] rounded-full bg-[#CDFF00] text-black flex items-center justify-center font-bold text-3xl">
                1
              </div>
              <h1 className="uppercase text-[60px]">book a call</h1>
              <p className="text-[30px] leading-[147.023%]">
                Our first meeting point is you booking a call with us
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[20px] items-start justify-center bg-black text-white">
            <div className="w-[70%] py-10 px-10">
              <div className="w-[80px] h-[80px] rounded-full bg-[#CDFF00] text-black flex items-center justify-center font-bold text-3xl">
                1
              </div>
              <h1 className="uppercase text-[60px]">book a call</h1>
              <p className="text-[30px] leading-[147.023%]">
                Our first meeting point is you booking a call with us
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[20px] items-start justify-center bg-black text-white">
            <div className="w-[70%] py-10 px-10">
              <div className="w-[80px] h-[80px] rounded-full bg-[#CDFF00] text-black flex items-center justify-center font-bold text-3xl">
                1
              </div>
              <h1 className="uppercase text-[60px]">book a call</h1>
              <p className="text-[30px] leading-[147.023%]">
                Our first meeting point is you booking a call with us
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[20px] items-start justify-center bg-black text-white">
            <div className="w-[70%] py-10 px-10">
              <div className="w-[80px] h-[80px] rounded-full bg-[#CDFF00] text-black flex items-center justify-center font-bold text-3xl">
                1
              </div>
              <h1 className="uppercase text-[60px]">book a call</h1>
              <p className="text-[30px] leading-[147.023%]">
                Our first meeting point is you booking a call with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustProcess;
