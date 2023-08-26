"use client";

import { cn } from "@/lib/utils";
import { Happy_Monkey } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Happy_Monkey({ weight: ["400"], subsets: ["latin"] });

interface DesignationProps {
  name: string;
  imageUrl: string;
  designation: string;
  className?: string
}

const Designation: React.FC<DesignationProps> = ({
  imageUrl,
  name,
  designation,
  className
}) => {
  return (
    <div className={cn("w-fit", className)}>
      <div
        className={cn(
          font.className,
          "text-[50px] leading-[60.51px] text-center",
          
        )}
      >
        {name}
      </div>
      <div className="h-4 w-full scale-110 relative">
        <Image src={imageUrl} alt="line" fill />
      </div>
      <div
        className={cn(
          "text-[30px] leading-[36.31px] text-center",
          font.className
        )}
      >
        {designation}
      </div>
    </div>
  );
};
export default Designation;
