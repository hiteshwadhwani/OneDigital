"use client";

import ClientOnly from "@/provider/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import HeroSection from "./components/hero-section/HeroSection";

const DashboardClient = () => {
  return (
    <ClientOnly>
      <Navbar />
      <HeroSection />
      <div className="bg-pink-900 h-[100vh] w-[100%] sticky top-0 flex flex-col">
        <div className="flex-1 bg-pink-500"></div>
        <div className="h-[90%] bg-pink-950"></div>
      </div>
    </ClientOnly>
  );
};
export default DashboardClient;
