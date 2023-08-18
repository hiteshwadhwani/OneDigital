'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import React from 'react'

interface NavitemProps{
    label: string
}

const NavItem: React.FC<NavitemProps> = ({label}) => {
    const path = usePathname()
    const isActive = path == `/${label}`
    return (
        <div className={`${isActive && 'font-bold'} hover:cursor-pointer hover:opacity-80 hover:scale-110 transition text-[20px]`}>
            {label}
        </div>
    )
}

export default NavItem