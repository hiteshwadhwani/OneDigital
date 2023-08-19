import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className="">
      <div className="bg-black h-[calc(100vh-280px)] flex flex-col items-center justify-center">
        <div className="text-[100px] leading-[111.5px] text-center text-white customTextAnimation">
          <span>Want </span>&nbsp;
          <span>your </span>&nbsp;
          <span>brand </span>&nbsp;
          <span>to </span>&nbsp;
          <span>go </span>&nbsp;
          <span>digital?</span>
          <br />
          <span>Let{"'"}s </span>&nbsp;
          <span>build </span>&nbsp;
          <span>it </span>&nbsp;
          <span>together</span>
        </div>
        <Button
          className={`h-fit w-fit rounded-full group transition text-[30px] py-[15px] px-[30px] bg-black text-white border border-white hover:bg-white hover:text-black mt-[70px]`}
        >
          Get Started
          <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
        </Button>
      </div>
      <div className="h-[180px] w-full relative">
        <Image
          src={"/images/hero-section/hero.svg"}
          fill
          className="object-cover"
          alt="hero design"
        />
      </div>
    </div>
  );
};
export default HeroSection;
