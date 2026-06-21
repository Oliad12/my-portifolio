"use client";

import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 sm:px-10 lg:px-[10%] xl:px-[12%] py-12 scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="flex justify-center mb-10">
        <p className="typing-text uppercase tracking-[0.3em] text-sm sm:text-base">
          Get To Know Me
        </p>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col lg:flex-row lg:items-start items-center gap-7 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="Tibebu Dereje - AI Full Stack Developer"
            width={500}
            height={500}
            priority
            className="w-72 sm:w-96 lg:w-107.5 h-auto rounded-3xl object-cover border-4 border-gray-300 cursor-pointer
              dark:border-gray-600 shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            AI Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="leading-8 font-Ovo max-w-3xl"
          >
            I am an{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-orange-300">
              AI Full-Stack Developer
            </span>{" "}
            passionate about building modern SaaS platforms, AI-powered
            applications, admin dashboards, and scalable web solutions. I
            specialize in transforming complex ideas into secure,
            high-performance, and user-friendly digital products that help
            businesses grow and operate more efficiently.
            <br />
            <br />
            With expertise in Next.js, TypeScript, React, Node.js, Express,
            Prisma, PostgreSQL, Supabase, and AI integrations, I develop
            production-ready applications focused on performance, scalability,
            and exceptional user experience.
          </motion.p>

          {/* Availability Badge */}
          <div className="mt-8">
            <p
              className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full border
                border-blue-300 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-md"
            >
              🌍 Available for Remote Opportunities Worldwide
            </p>
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <h4 className="mb-5 text-lg font-semibold">Tools & Technologies</h4>

            <ul className="flex flex-wrap items-center gap-4">
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex items-center justify-center w-14 h-14 border
                    border-gray-300 dark:border-gray-700
                    rounded-xl bg-white dark:bg-gray-900 shadow-sm cursor-pointer"
                >
                  <Image
                    src={tool}
                    alt="Technology"
                    className="w-7 h-7 object-contain"
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
