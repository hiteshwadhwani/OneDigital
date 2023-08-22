"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const font = Poppins({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    <div className="h-[100vh] bg-black w-[100%] flex">
      <div className="relative flex-1">
        {/* content */}
        <div className="h-full pt-[60px] pb-[30vh] md:pb-[15vh] flex flex-col md:items-center justify-center gap-y-[50px] md:gap-y-[70px] px-[33px] md:px-0">
          <div className="text-[50px] md:text-[100px] leading-[125%] md:leading-[111.5%] md:text-center text-white customTextAnimation font">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className={`h-fit w-fit rounded-full group transition text-[20px] md:text-[30px] py-[15px] px-[30px] bg-black text-white border border-white hover:bg-white hover:text-black flex flex-row items-center hover:cursor-pointer`}
          >
            Get Started
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="h-[15%] absolute bottom-0 left-0 right-0 hidden md:block"
        >
          <Image
            src={"/images/hero-section/hero.svg"}
            fill
            className="object-cover"
            alt="hero design"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="h-[30%] absolute bottom-0 left-0 right-0 md:hidden"
        >
          <Image
            src={"/images/hero-section/mobile-hero.svg"}
            fill
            className="object-cover"
            alt="hero design"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
