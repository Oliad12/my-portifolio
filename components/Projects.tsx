"use client";

import { assets, ProjectType, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const filters: ProjectType[] = [
    "All",
    "Full-Stack",
    "SaaS",
    "DevOps",
    "AI /ML",
  ];
  const [activeFilter, setActiveFilter] = useState<ProjectType>("All");

  const filteredProjects =
    activeFilter === "All"
      ? workData
      : workData.filter((project) => project.type === activeFilter);
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 mt-20 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio. Explore a curated collection of
        projects demonstrating my expertise in building interactive, responsive,
        and high-performance web applications with modern technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex sm:gap-5 gap-2 flex-wrap justify-start"
      >
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="relative px-3 py-1 text-md font-medium cursor-pointer text-bold hover:text-indigo-500 transition-colors"
          >
            {filter}
            <span
              className={`absolute left-0 bottom-0 h-1 w-full transition-all duration-300 ${
                activeFilter === filter ? "bg-purple-500" : "bg-transparent"
              }`}
            />
          </Button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="aspect-video sm:aspect-square h-full bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <CardContent
                className="bg-gray-600 w-10/11 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                     py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
              >
                <div>
                  <h2 className="text-sm font-bold font-Ovo">
                    {project.title}
                  </h2>
                  <p className="text-sm font-bold font-Ovo">{project.type}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="border rounded-full border-black w-9 cursor-pointer aspect-square flex items-center 
                                  justify-center shadow-[1px_1px_0_#000] group-hover:bg-lime-300 transition"
                >
                  <Button size="icon" variant="secondary">
                    <Image
                      src={assets.send_icon}
                      alt="send-icon"
                      className="w-5 cursor-pointer"
                    />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        href="/contact"
        aria-label="Contact me to work together"
        className="group w-max flex items-center justify-between gap-2 text-white border border-transparent rounded-full 
        px-6 py-3 mx-auto font-medium bg-linear-to-r from-[#cbc0b0] to-[#2e2b2f] shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Let’s work together
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>
    </motion.section>
  );
};
