"use client";

import ClientOnly from "@/provider/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import HeroSection from "./components/hero-section/HeroSection";
import WhatWeDo from "./components/what-we-do/WhatWeDo";

const DashboardClient = () => {
  return (
    <ClientOnly>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
    </ClientOnly>
  );
};
export default DashboardClient;
