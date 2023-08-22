"use client";

import { ParallaxText } from "@/components/ui/ParallexText";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

export type SelectedTypes = "all" | "Web Design" | "Web Development" | "Social Media";
export type Portfolio = {
    heading: string,
    subHeading: string,
    type: SelectedTypes,
    href?: string,
    image: string
}
const portfolio: Portfolio[] = [
    {heading: 'Found It', subHeading: 'UI/UX Website Design for online job portal Found it', type: 'Web Design', image: '/images/porfolio/infigon.svg'}
]
const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<SelectedTypes>("all");
  return (
    <div className="py-5 h-[100vh] w-full">
      <ParallaxText baseVelocity={3}>
        <div className="flex flex-row items-center gap-x-10 font-extralight">
          <div>WE DESGIN</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We BUILD</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We PROMOTE</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>WE DESGIN</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We BUILD</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We PROMOTE</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>WE DESGIN</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We BUILD</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
          <div>We PROMOTE</div>
          <Image width={27} height={27} alt="star" src={"/images/Star.svg"} />
        </div>
      </ParallaxText>

      {/* heading */}
      <h1 className="text-[200px] font-medium text-center">PORTFOLIO</h1>

      {/* menu */}
      <div className="text-[30px] text-[#949494] flex flex-row items-center justify-between w-[50%] mx-auto font-light">
        <div className="hover:text-black transition hover:cursor-pointer">
          All
        </div>
        <div className="hover:text-black transition hover:cursor-pointer">
          Web Design
        </div>
        <div className="hover:text-black transition hover:cursor-pointer">
          Web Development
        </div>
        <div className="hover:text-black transition hover:cursor-pointer">
          Social Media
        </div>
      </div>
      <AnimatePresence mode="wait">
        {/* <motion.div
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedTab ? selectedTab.icon : "😋"}
        </motion.div> */}

        {portfolio.map((item) => (
            <PortfolioCard key={item.heading} {...item} />
        ))}
      </AnimatePresence>
    </div>
  );
};
export default Portfolio;
