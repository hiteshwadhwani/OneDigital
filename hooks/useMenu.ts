'use client'
import {create} from 'zustand'

interface useMenuStore{
    isOpen: boolean;
    setOpen: () => void
    setClose: () => void
}

export const useMenu = create<useMenuStore>((set) => ({
    isOpen: false,
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen: false})
}))