"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Facebook, Linkedin, User } from "lucide-react";
import { assets } from "@/assets/assets";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Oliad12", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/in/tibebu12", label: "LinkedIn"},
  ];
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.footer
      className="w-full mt-8 px-[8%] py-10 border-t border-cyan-500 border-border text-foreground scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            
          >
            <Link href="#top">
              <motion.div whileHover={{ scale: 1.05 }} className="flex  items-center gap-4 w-fit">
                <Image src={assets.profile_img2} alt="profile image"
                 className="w-14 h-14 rounded-full object-cover"/>
                <span className="text-xl font-bold bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Tibebu Dereje</span>
              </motion.div>
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-foreground mb-4 mt-4 text-medium"
            >
              Passionate about crafting modern digital experiences that combine
              clean design, strong engineering principles, and real-world
              business impact
            </motion.p>

            <div className="flex space-x-4 mt-5">
              <TooltipProvider>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-amber-500  
                        hover:bg-blue-200 text-muted-foreground hover:text-background transition-colors"
                          >
                            <Icon className="h-5 w-5" />
                          </motion.a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-blue-500 absolute">{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  );
                })}
              </TooltipProvider>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="sm:px-20 px-[8%] py-5"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
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
            className="flex flex-col md:flex-col gap-4 sm:px-0 px-[8%] py-0 sm:py-5"
          >
            <h4 className="font-bold text-purple-400">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest updates and services.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 py-3 px-4 w-max rounded-full border bg-background shadow-sm"
            >
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
              className="px-4 py-1 rounded-full w-max flex items-center justify-between border
               bg-amber-900  text-white transition-colors duration-300 
               hover:bg-slate-200 hover:text-black sm:mx-15"
            >
              Subscribe
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="mt-14 pt-6 border-t text-sm text-muted-foreground "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}
          <span className="font-semibold bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mx-2">
            Tibebu Dereje
          </span>
          All rights reserved.
        </motion.div>
        </div>
    </motion.footer>
  );
};
