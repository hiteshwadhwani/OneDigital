'use client'

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import React from "react"

interface ArrowButtonProps{
    className: string
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
    className
}) => {
    return (
        <div className={cn('w-[50px] h-[50px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center text-black', className)}>
            <ArrowRight className="transform -rotate-45 h-full w-full p-2 md:p-5" />
        </div>
    )
}
export default ArrowButton