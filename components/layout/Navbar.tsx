"use client"
import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { assets } from "@/assets/assets"
import { Home, Phone, Info, Briefcase, Settings } from "lucide-react"



export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const sheetContentRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 100)
    }
  }, [isMenuOpen])
      // eslint-disable-next-line react-hooks/set-state-in-effect
      useEffect(() => setMounted(true), [])
    if (!mounted) return null

  const desktopMenuClass = isScroll
    ? isDark
      ? "bg-transparent border-0 shadow-none text-white"
      : "bg-white border border-purple-500 shadow-sm"
    : "bg-white/50 border border-gray-700 backdrop-blur shadow-sm dark:border-white/50 dark:bg-transparent"

  const mobileMenuClass = isDark
    ? "dark:bg-[#2a004a] dark:text-white"
    : "bg-rose-100 text-black"

  return (
    <nav className={`fixed w-full top-0 lg:py-0 xl:px-[8%]  flex items-center justify-between z-50 transition-all duration-300 
      ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-white/10 dark:shadow-white/20" : ""}`} >
      <Link href="/" className="flex flex-row font-semibold text-2xl md:text-3xl items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}>
          <Image src={assets.logo} alt="logo-image" className="w-20 h-20 cursor-pointer" />
        </motion.div>
      </Link>

      <div className="flex items-center gap-4">
        <ul className={`hidden md:flex gap-2 p-0.5 lg:gap-8 items-center rounded-full px-7 py-2 transition duration-300 ${desktopMenuClass}`}>
          <li><Link className="font-Ovo hover:text-purple-600 transition-colors duration-300" href="/">Home</Link></li>
          <li><Link className="font-Ovo hover:text-purple-600 transition-colors duration-300" href="/about">About Me</Link></li>
          <li><Link className="font-Ovo hover:text-purple-600 transition-colors duration-300" href="/services">Services</Link></li>
          <li><Link className="font-Ovo hover:text-purple-600 transition-colors duration-300" href="/projects">Project</Link></li>
          <li><Link className="font-Ovo hover:text-purple-600 transition-colors duration-300" href="/contact">Contact</Link></li>
        </ul>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="focus:outline-none focus:ring-0">
          <Image src={isDark ? assets.sun_icon : assets.moon_icon}
            alt="icon"
            className="w-5 cursor-pointer"/>
        </Button>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden focus:outline-none focus:ring-0">
              <Image src={isDark ? assets.menu_white : assets.menu_black}
                alt="menu-icon"
                className="w-6 h-6 cursor-pointer"/>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            ref={sheetContentRef}
            className={`flex flex-col md:hidden py-20 px-10 fixed top-0 right-0 list-none w-64 h-screen transition duration-500 ${mobileMenuClass}`}>
              <div className="border-b pb-5 mb-6 flex justify-start">
                <Image src={assets.profile_img2} alt="profile image" 
                 className="w-16 h-16 rounded-full object-cover"/>
              </div>  
          <ul className="space-y-3 justify-center">
            <li><Link ref={firstLinkRef} className="font-Ovo flex items-center gap-4 hover:text-rose-700 transition-colors duration-300" href="/" onClick={() => setIsMenuOpen(false)}><Home className="w-5 h-5"/> Home</Link></li>
            <li><Link className="font-Ovo flex items-center gap-4  hover:text-rose-700 transition-colors duration-300" href="/about" onClick={() => setIsMenuOpen(false)}><Info className="w-5 h-5"/> About Me</Link></li>
            <li><Link className="font-Ovo flex items-center gap-4 hover:text-rose-700 transition-colors duration-300" href="/services" onClick={() => setIsMenuOpen(false)}><Settings className="w-5 h-5"/> Services</Link></li>
            <li><Link className="font-Ovo flex items-center gap-4 hover:text-rose-700 transition-colors duration-300" href="/projects" onClick={() => setIsMenuOpen(false)}><Briefcase className="w-5 h-5"/> Project</Link></li>
            <li><Link className="font-Ovo flex items-center gap-4 hover:text-rose-700 transition-colors duration-300" href="/contact" onClick={() => setIsMenuOpen(false)}><Phone className="w-5 h-5"/> Contact</Link></li>
          </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
