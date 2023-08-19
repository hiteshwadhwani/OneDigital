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
        <motion.div whileHover={{scale:1.1}} className={`${isActive && 'font-bold'} hover:cursor-pointer text-[20px]`}>
            {label}
        </motion.div>
    )
}

export default NavItem