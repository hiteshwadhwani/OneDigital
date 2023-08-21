"use client";

import ClientOnly from "@/provider/ClientOnly";
import { motion } from "framer-motion";
import NavItem from "./NavItems";
import { Button } from "@/components/ui/button";
import { ArrowRight, HammerIcon, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMenu } from "@/hooks/useMenu";
import SideMenu from "@/components/SideMenu";

const Navbar = () => {
  const {setOpen, isOpen} = useMenu()
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
      <SideMenu />
      <motion.div
        className={`${isOpen ? 'hidden': 'block'} px-[40px] md:px-[100px] w-full h-[60px] md:h-[80px] flex justify-between items-center z-10 text-white fixed top-0 backdrop-blur-3xl`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        {/* ============ LOGO ============== */}
        <div className="h-[20px] w-[100px] md:w-[150px] md:h-[30px] relative">
          <Image src={"/images/logo.svg"} fill alt="Logo" />
        </div>
        <div className="hidden md:flex flex-row items-center gap-x-[50px]">
          <NavItem label="Service" />
          <NavItem label="Work" />
          <NavItem label="About us" />
          <NavItem label="Contact" />
        </div>
        <div>
          <Button
            className={`hidden md:flex h-fit bg-black text-white border border-white rounded-full group hover:scale-110 py-2 transition text-[18px] hover:text-black hover:bg-white`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </Button>
        </div>
        
        <Menu onClick={() => setOpen()} className="md:hidden w-5 h-5 hover:cursor-pointer hover:opacity-80" />
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
