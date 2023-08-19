import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const font = Poppins({ subsets: ["latin"], weight: "400" });

const HeroSection = () => {
  return (
    // <div className="h-[calc(100vh-80px)] w-[100%] sticky top-0 flex flex-col">
    //   <div className="flex-1 flex flex-col items-center justify-center bg-black gap-y-[70px]">
    //     <div className="text-[100px] leading-[111.5px] text-center text-white customTextAnimation">
    //       <span>Want </span>&nbsp;
    //       <span>your </span>&nbsp;
    //       <span>brand </span>&nbsp;
    //       <span>to </span>&nbsp;
    //       <span>go </span>&nbsp;
    //       <span>digital?</span>
    //       <br />
    //       <span>Let{"'"}s </span>&nbsp;
    //       <span>build </span>&nbsp;
    //       <span>it </span>&nbsp;
    //       <span>together</span>
    //     </div>
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1.5, delay: 1.2 }}
    //       className={`h-fit w-fit rounded-full group transition text-[30px] py-[15px] px-[30px] bg-black text-white border border-white hover:bg-white hover:text-black flex flex-row items-center hover:cursor-pointer`}
    //     >
    //       Get Started
    //       <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition" />
    //     </motion.div>
    //   </div>
    //   <div className="h-[20%] w-full relative">
    //     <Image
    //       src={"/images/hero-section/hero.svg"}
    //       fill
    //       className="object-cover"
    //       alt="hero design"
    //     />
    //   </div>
    // </div>
    // <div className="h-[100vh] pt-[80px] pb-[20%] w-[100%] sticky top-0 flex flex-col">
    //   <div className="flex-1 flex flex-col items-center justify-center bg-black gap-y-[70px]">
    //     <div className="text-[100px] leading-[111.5px] text-center text-white customTextAnimation">
    //       <span>Want </span>&nbsp;
    //       <span>your </span>&nbsp;
    //       <span>brand </span>&nbsp;
    //       <span>to </span>&nbsp;
    //       <span>go </span>&nbsp;
    //       <span>digital?</span>
    //       <br />
    //       <span>Let{"'"}s </span>&nbsp;
    //       <span>build </span>&nbsp;
    //       <span>it </span>&nbsp;
    //       <span>together</span>
    //     </div>
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1.5, delay: 1.2 }}
    //       className={`h-fit w-fit rounded-full group transition text-[30px] py-[15px] px-[30px] bg-black text-white border border-white hover:bg-white hover:text-black flex flex-row items-center hover:cursor-pointer`}
    //     >
    //       Get Started
    //       <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition" />
    //     </motion.div>
    //   </div>
    //   <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ duration: 1.5, delay: 1.2 }} className="h-[20%] w-full relative">
    //     <Image
    //       src={"/images/hero-section/hero.svg"}
    //       fill
    //       className="object-cover"
    //       alt="hero design"
    //     />
    //   </motion.div>
    // </div>
    <div className="h-[100vh] bg-black w-[100%] sticky top-0 flex">
      <div className="relative flex-1">
        {/* content */}
        <div className="h-full pt-[150px] pb-[15%] flex flex-col justify-center items-center gap-y-[70px]">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className={`h-fit w-fit rounded-full group transition text-[30px] py-[15px] px-[30px] bg-black text-white border border-white hover:bg-white hover:text-black flex flex-row items-center hover:cursor-pointer`}
          >
            Get Started
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="h-[15%] absolute bottom-0 left-0 right-0"
        >
          <Image
            src={"/images/hero-section/hero.svg"}
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
