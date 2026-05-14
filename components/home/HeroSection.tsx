"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";
import Link from "next/link";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full px-[5%] py-10 mt-26 scroll-mt-20">
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl"></div>
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          className="hidden md:flex justify-center"
        >
          <Image
            src={assets.profile_img2}
            alt="Tibebu Dereje"
            width={300}
            height={300}
            className="rounded-full md:rounded-3xl shadow-2xl ring-4 ring-purple-500/20 object-cover"
          />
         
        </motion.div>

        <div className="space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-muted-foreground"
          >
            Hello, 
            <span className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-orange-400">
            I&apos;m
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            Tibebu Dereje
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-orange-400"
          >
            <TypeAnimation
              sequence={[
                "Software Engineering",
                1500,
                "Full-Stack Developer",
                1500,
                "SaaS Application Builder",
                1500,
                "AI-Powered Web Developer",
                1500,
                "DevOps Engineer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground mx-auto md:mx-0 max-w-md font-Ovo"
          >
            I build scalable modern web applications, AI-powered SaaS
            platforms, and high-performance digital experiences using
            React, Next.js, Node.js, TypeScript, Cloud, and DevOps tools.
          </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 mt-10"
        >
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link
                href="/contact"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDark
                    ? "border-white text-white hover:bg-gray-300 hover:text-black"
                    : "border-black text-white bg-black hover:bg-blue-300 hover:text-black"
                }`}
              >
                Hire Me
                <Image
                  src={assets.right_arrow_white}
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a
                href="/TiD_CV.pdf"
                download
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  isDark
                    ? "bg-white text-black hover:bg-blue-300"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Resume
                <Image
                  src={assets.download_icon}
                  alt="Download"
                  width={16}
                  height={16}
                />
              </a>
            </Button>
          </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 justify-center md:justify-start pt-4"
          >
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

            <p className="text-sm text-muted-foreground">
              Available for freelance & remote opportunities worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}