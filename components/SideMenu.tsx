"use client";
import { useMenu } from "@/hooks/useMenu";
import { cn } from "@/lib/utils";
import { Variant, Variants, motion } from "framer-motion";
import { useRef } from "react";

// const sidebar = {
//     open: (height = 1000) => ({
//       clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2
//       }
//     }),
//     closed: {
//       clipPath: "circle(30px at 40px 40px)",
//       transition: {
//         delay: 0.5,
//         type: "spring",
//         stiffness: 400,
//         damping: 40
//       }
//     }
//   };

const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };


const SideMenu = () => {
  const { isOpen, setClose, setOpen } = useMenu();
  console.log(isOpen);
  return (
    <motion.nav
    initial={{width: 0}} animate={{width: isOpen ? '100%' : 0}} transition={{duration: 0.5, ease: 'easeOut'}}
      className={`text-white absolute h-[100vh] bg-gradient-to-br from-black to-[#1f1f1f] z-10`}
    >
    </motion.nav>
  );
};
export default SideMenu;
