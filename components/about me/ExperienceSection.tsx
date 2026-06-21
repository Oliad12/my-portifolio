"use client"

import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"
import { experienceData, educationData } from "@/assets/assets"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const ExperienceSection = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100"

  return (
    <section className="w-full px-6 lg:px-[12%] py-16 scroll-mt-20">
      <div className={`relative p-6 lg:p-12 transition-colors duration-500 rounded-xl ${bgColor}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* --- Experience Column --- */}
          <article className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-blue-500/20" />
            <h2 className="flex items-center gap-2 text-xl font-bold mb-12 text-blue-600
             hover:text-blue-800 transition-colors duration-300 relative z-10">
              <Briefcase size={20} /> Experience
            </h2>

            <div className="space-y-5 relative z-10">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-10 top-6 h-1.5 w-1.5 rounded-full bg-blue-600 ring-4 ring-background animate-pulse" />

                  <Card className="overflow-hidden transition-all duration-300 cursor-pointer border border-transparent
                   hover:border-blue-400 hover:shadow-lg">
                    <CardContent className="p-2 flex flex-col gap-3">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="font-bold text-lg transition-colors group-hover:text-blue-600">
                          {exp.role}
                        </h3>
                        <Badge variant="outline" className="font-medium hover:border-blue-500">
                          {exp.type || exp.duration}
                        </Badge>
                      </div>

                      {exp.company && (
                        <p className="text-sm font-medium text-blue-300">
                          {exp.company}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-4 mt-1 text-xs text-muted-foreground">
                        {exp.duration && (
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {exp.duration}
                          </span>
                        )}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} /> {exp.location}
                          </span>
                        )}
                      </div>

                      {exp.highlights && (
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <ArrowRight
                                size={16}
                                className="shrink-0 mt-1 text-blue-500 group-hover:text-blue-600 transition-colors"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2 pt-2 text-purple-600">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </article>

          {/* --- Education Column --- */}
          <article className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-amber-400/30" />
            <h2 className="flex items-center gap-2 text-xl font-bold mb-12 text-amber-600
             hover:text-amber-800 transition-colors duration-300 relative z-10">
              <GraduationCap size={20} /> Education
            </h2>

            <div className="space-y-8 relative z-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-10 top-6 h-1.5 w-1.5 rounded-full bg-amber-600 ring-4 ring-background animate-pulse" />

                  <Card className="overflow-hidden transition-all duration-300 cursor-pointer border border-transparent hover:border-amber-400 hover:shadow-lg">
                    <CardContent className="p-2 flex flex-col gap-3">
                      <h3 className="font-semibold text-lg transition-colors group-hover:text-amber-600">
                        {edu.degree}
                      </h3>

                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <p className="text-sm font-medium text-amber-400">{edu.institution}</p>
                        <Badge variant="outline" className="text-xs border-amber-900 text-green-500">
                          {edu.duration}
                        </Badge>
                      </div>

                      {edu.details && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {edu.details}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}