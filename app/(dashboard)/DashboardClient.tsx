"use client";

import ClientOnly from "@/provider/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import HeroSection from "./components/hero-section/HeroSection";

const DashboardClient = () => {
  return (
    <ClientOnly>
      <Navbar />

      <div className="h-[calc(100vh-100px)] w-[100%] sticky top-0">
        <HeroSection />
      </div>
      <div className="bg-pink-900 h-[100vh] w-[100%] sticky top-0">
        SECTION 2
      </div>
    </ClientOnly>
  );
};
export default DashboardClient;
