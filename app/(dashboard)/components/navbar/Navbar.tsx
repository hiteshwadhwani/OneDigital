"use client";

import ClientOnly from "@/provider/ClientOnly";
import { motion } from "framer-motion";
import NavItem from "./NavItems";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);


  return (
    <ClientOnly>
      <motion.div
        className={`px-[100px] w-full h-[80px] flex justify-between items-center z-10 text-white fixed top-0`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: visible ? 0 : -100 }}
        transition={{ duration: 1.5 }}
      >
        {/* ============ LOGO ============== */}
        <div className="w-[150px] h-[30px] relative">
          <Image src={"/images/logo.svg"} fill alt="Logo" />
        </div>
        <div className="flex flex-row items-center gap-x-[50px]">
          <NavItem label="Service" />
          <NavItem label="Work" />
          <NavItem label="About us" />
          <NavItem label="Contact" />
        </div>
        <div>
          <Button
            className={`h-fit bg-white text-black border border-black rounded-full group hover:scale-110 py-2 transition text-[18px] hover:bg-black hover:text-white`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </Button>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0.5, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <Separator />
      </motion.div> */}
    </ClientOnly>
  );
};

export default Navbar;
