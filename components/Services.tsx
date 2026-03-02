"use client";

import { serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Services = () => {
  const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
  return (
    <motion.section
      id="services"
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
        What I Offer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I build scalable, high-performance digital solutions that help
        businesses grow and succeed.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10"
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
          >
            <Card
              className="aspect-auto group h-full cursor-pointer border rounded-lg  bg-background
                 transition-shadow hover:shadow-xl hover:-translate-y-1 duration-500"
            >
              <CardContent className="flex flex-col items-center text-center gap-3 p-4">
                <div className="flex gap-2 items-center">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center bg-linear-to-r ${service.gradient}`}
                  >
                    {service.icon && (
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    )}
                  </motion.div>
                  <h3 className="text-sm font-bold font-Ovo my-2 font-Ovo">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-5 font-Ovo">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="link"
                    className="mt-2 hover:text-blue-700 cursor-pointer"
                  >
                    Learn more →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {/* ================= Why Choose Me ================= */}
      <div
        className={`p-6 lg:p-12 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-100"
        } transition-colors duration-500`}
      >
        <h3 className="text-2xl text-orange-600 font-bold text-muted-foreground  mb-6 text-center">
          Why Clients Choose Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "Delivering clean, scalable, and production-ready code",
            "Building business-driven solutions focused on ROI",
            "Transparent communication and on-time delivery",
            "Long-term technical support and growth strategy",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex gap-3 p-6 border border-amber-100 rounded-lg 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="text-amber-500 font-bold text-xl items">•</span>
              <p className="text-muted-foreground font-Ovo">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
