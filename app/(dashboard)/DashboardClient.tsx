'use client'

import ClientOnly from "@/provider/ClientOnly"
import Navbar from "./components/navbar/Navbar"
import { motion } from "framer-motion"

const DashboardClient = () => {
    return (
        <ClientOnly>
           <Navbar />
            <motion.div layoutScroll className="stack">
                <div className="bg-black h-[100vh] text-white text-5xl flex items-center justify-center w-[100vw] snap-start sticky top-0">SECTION 1</div>
                <div className="bg-blue-800 h-[100vh] text-white text-5xl flex items-center justify-center w-[100vw] snap-start sticky top-0">SECTION 2</div>
                <div className="bg-yellow-500 h-[100vh] text-white text-5xl flex items-center justify-center w-[100vw] snap-start sticky top-0">SECTION 3</div>
                <div className="bg-green-300 h-[100vh] text-white text-5xl flex items-center justify-center w-[100vw] snap-start sticky top-0">SECTION 4</div>
            </motion.div>
        </ClientOnly>
    )
}
export default DashboardClient