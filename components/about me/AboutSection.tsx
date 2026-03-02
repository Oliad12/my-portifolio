"use client";

import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSection = ({}) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 sm:px-10 lg:px-[10%] xl:px-[12%] mt-0 sm:mt-8 py-12 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl sm:text-5xl font-Ovo mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16 my-5"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none overflow-hidden"
        >
          <Image
            src={assets.user_image}
            alt="Tibebu Dereje - AI Full Stack Developer"
            width={500}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 mb-10 max-w-2xl font-Ovo"
          >
            I build AI-focused Full-Stack Developer helping startups and
            businesses build scalable, high-performance digital platforms. From
            modern web applications to AI-powered systems and subscription-based
            platforms, I deliver secure, optimized, and production-ready
            solutions designed for real business growth. I combine strong
            technical expertise with a problem-solving mindset to turn complex
            ideas into efficient, user-friendly, and revenue-generating
            products.
          </motion.p>
          <p className="mt-6 mb-8 max-w-2xl text-base text-blue-700 leading-relaxed font-Ovo">
            Based in Ethiopia — working with clients worldwide.
          </p>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 font-Ovo"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileInView={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
