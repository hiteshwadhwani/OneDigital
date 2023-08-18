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
        <motion.div whileHover={{scale: 1.1, opacity: 0.8}} transition={{duration: 0.1}} whileTap={{scale:1.2}} className={`${isActive && 'font-bold'} hover:cursor-pointer hover:opacity-80`}>
            {label}
        </motion.div>
    )
}

export default NavItem