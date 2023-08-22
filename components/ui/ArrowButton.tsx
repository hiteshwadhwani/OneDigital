'use client'

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import React from "react"

interface ArrowButtonProps{
    className: string
    rotate?: boolean
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
    className, rotate
}) => {
    return (
        <div className={cn(' rounded-full flex items-center justify-center text-black', className)}>
            <ArrowRight className={`transform ${rotate && '-rotate-45'} h-full w-full p-2 md:p-5`} />
        </div>
    )
}
export default ArrowButton