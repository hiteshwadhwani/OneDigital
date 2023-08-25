"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  image?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ image, color }) => {
  return (
    <div className={cn("w-[216px] h-[216px] rounded-full relative", color)}>
      {image && <Image src={image} fill alt="image" />}
    </div>
  );
};

export default Card
