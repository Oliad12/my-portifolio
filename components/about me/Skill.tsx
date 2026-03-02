"use client";

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  Backend: ["Node.js", "Express", "Django", "Spring Boot"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  AIDevOps: ["OpenAI API", "Prompt Engineering", "AI Automation", "CI/CD Pipelines", "Docker", "Kubernetes", "AWS"],
}

export const SkillsSection = () => {
  return (
    <motion.section      
      id="skills"
      className="w-full mt-8 px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {Object.entries(skills).map(([title, items]) => (
          <Card key={title} className="p-4 bg-card-bg border rounded-xl border-gray-200 cursor-pointer hover:border-amber-500
                     hover:scale-105 hover:shadow-xl shadow-lg mt-4 transition-all duration-300 ease-in-out">
            <h3 className="font-semibold mb-3 text-[#1608df]">{title}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {items.map((skill) => (
                <li key={skill}>
                  <ArrowRight size={15} className="inline-block mx-1 text-blue-300"/> 
                   {skill}</li>
              ))}
            </ul>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  )
}
