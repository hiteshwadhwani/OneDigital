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
        <div className={cn('h-[100px] w-[100px] rounded-full flex items-center justify-center text-black', className)}>
            <ArrowRight className="h-12 w-12 transform -rotate-45" />
        </div>
    )
}
export default ArrowButton