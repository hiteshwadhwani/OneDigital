"use client";

import { Button } from "@/components/ui/button";
import { CableCar, Phone } from "lucide-react";
import Image from "next/image";

const CallUs = () => {
  return (
    <div className="min-h-[100vh] h-fit w-full bg-black relative">
      <div className="w-full opacity-40 lg:opacity-100 lg:w-[50%] min-h-[100vh] h-fit absolute right-0">
        <Image
          src="/images/callus.svg"
          fill
          alt="background"
          className="object-cover"
        />
      </div>
      <div className="w-full lg:w-[40%] min-h-[100vh] h-fit absolute left-0 flex flex-col items-start justify-center p-10">
        <div className="text-[70px] md:text-[100px] text-white font-light leading-[80px] md:leading-[122.02px]">
          You’re Just a Call away
        </div>
        <Button className="bg-black hover:bg-white hover:text-black text-[30px] md:text-[50px] w-fit h-fit rounded-full border border-white mt-4 md:px-10 md:py-6 flex flex-row items-center justify-between gap-x-4">
          <Phone fill="white" />
          Book a call
        </Button>
      </div>
    </div>
  );
};

export default CallUs;
