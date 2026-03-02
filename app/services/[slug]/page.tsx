"use client";

import { useParams } from "next/navigation";
import { serviceData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center mt-32">
        <p className="text-lg">Service not found.</p>
        <Link href="/services" className="text-blue-500 underline mt-4 block">
          Go back to Services
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full  mt-12 px-[14%] py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col mt-12 items-center text-center gap-4"
      >
        <div className="flex gap-2 items-center">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-18 h-18 rounded-xl flex items-center justify-center bg-linear-to-r ${service.gradient}`}
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
          <h3 className="text-4xl sm:text-5xl font-bold font-Ovo my-2 font-Ovo">
            {service.title}
          </h3>
        </div>
        <p className="text-foreground font-ovo max-w-2xl">
          {service.description}
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Details</h2>
        <p className="text-foreground font-ovo max-w-3xl mx-auto">
          {service.details}
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
          Technologies Used
        </h3>
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {service.tech.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Badge
                className="bg-background border rounded-full border-purple-600 
              hover:border-pink-400 text-foreground  px-3 py-1 text-sm cursor-pointer transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <Link href="/services">
            <Button variant="outline" className="px-3 py-2 cursor-pointer">
              ←Services
            </Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
