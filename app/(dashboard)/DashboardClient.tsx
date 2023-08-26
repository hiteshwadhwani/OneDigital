"use client";

import ClientOnly from "@/provider/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import HeroSection from "./components/hero-section/HeroSection";
import WhatWeDo from "./components/what-we-do/WhatWeDo";
import SideMenu from "@/components/SideMenu";
import Portfolio from "./components/portfolio/Portfolio";
import TrustProcess from "./components/trust-the-process/TrustProcess";
import WhatPeopleSay from "./components/what-people-say/WhatPeopleSay";
import MeetTeam from "./components/meet-team/MeetTeam";
import CallUs from "./components/call-us/CallUs";

const DashboardClient = () => {
  return (
    <ClientOnly>
      
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Portfolio />
      <TrustProcess />
      <WhatPeopleSay />
      <MeetTeam />
      <CallUs />
    </ClientOnly>
  );
};
export default DashboardClient;
