"use client";

import ClientOnly from "@/provider/ClientOnly";
import { motion } from "framer-motion";
import NavItem from "./NavItems";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <ClientOnly>
      <motion.div
        className={`w-[50%] h-[100vh] md:px-[100px] md:w-full md:h-[100px] flex justify-between items-center`}
        initial={{ opacity: 0.5, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
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
            className={`bg-white text-black border border-black rounded-full group hover:scale-110 transition text-[18px] py-5 hover:bg-black hover:text-white`}
          >
            Get Started
            <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <Separator />
      </motion.div>
    </ClientOnly>
  );
};

export default Navbar;
