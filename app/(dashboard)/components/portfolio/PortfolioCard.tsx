'use client'

import React from "react"
import { Portfolio } from "./Portfolio"
import Image from "next/image"
import ArrowButton from "@/components/ui/ArrowButton"


 const PortfolioCard: React.FC<Portfolio> = ({heading, subHeading, href, type, image}) => {
    return (
        <div className="h-fit flex flex-col w-[464px] px-5 border border-[#E4E4E4]">
            <h2 className="text-[40px] text-center mt-2">{heading}</h2>
            <p className="text-[24px] text-[#949494] text-center">{subHeading}</p>
            <ArrowButton className="bg-[#CDFF00] border-2 border-black h-[68px] w-[68px]" />
            <div className="h-[229px] w-full relative">
                <Image src={image} alt="porfolio image" fill />
            </div>
        </div>
    )
}

export default PortfolioCard