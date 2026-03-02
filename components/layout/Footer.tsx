"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Facebook, Linkedin, User } from "lucide-react";
import { assets } from "@/assets/assets";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Footer = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full mt-12 py-12 px-6 md:px-16 lg:px-24 
      bg-linear-to-b from-background to-muted/30
      border-t border-border text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="w-fit">
              <Image
                src={assets.logo}
                alt="Tibebu"
                className="w-20 cursor-pointer"
                priority
              />
            </motion.div>
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-sm text-sm sm:text-base text-muted-foreground leading-relaxed font-(--font-ovo)"
          >
            Passionate about crafting modern digital
            experiences that combine clean design, strong engineering
            principles, and real-world business impact
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-amber-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-col items-center justify-center gap-4"
          >
            <h3 className="text-lg font-semibold text-primary">
              Stay Updated
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 py-3 px-4 rounded-full border bg-background shadow-sm">
              <User className="w-5 h-5 opacity-70" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="#"
              className="px-4 py-1 rounded-full w-max flex items-center justify-between border bg-amber-900 border-black text-white font-Ovo transition-colors duration-300 hover:bg-slate-200 hover:text-black mx-auto sm:mx-0"
            >
              Subscribe
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-sm font-medium text-muted-foreground">
          © 2025{" "}
          <span className="bg-linear-to-r from-[#07c911] to-[#250ed6] bg-clip-text text-transparent font-bold">
            Tibebu Dereje
          </span>
          . All rights reserved.
        </p>
        <TooltipProvider>
          <ul className="flex items-center gap-10">
            {[
              {
                name: "GitHub",
                url: "https://github.com/Oliad12",
                icon: Github,
              },
              {
                name: "Facebook",
                url: "https://facebook.com/",
                icon: Facebook,
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/tibebu12",
                icon: Linkedin,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.name}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-amber-500  
                        hover:bg-blue-200 text-muted-foreground hover:text-background transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-purple-500">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.li>
              );
            })}
          </ul>
        </TooltipProvider>
      </motion.div>
    </footer>
  );
};
