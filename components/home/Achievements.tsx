"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { achievementsList } from "@/assets/assets";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function Achievements() {
  return (
    <section className="w-full px-6 lg:px-[12%] py-5 scroll-mt-20">
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6
    py-8 px-8 rounded-xl md:border-y border-border"
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="relative flex flex-col items-center justify-center p-6 w-40 md:w-48 rounded-xl 
            bg-background/90 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-xl 
              bg-linear-to-r from-red-500 via-white to-black 
             bg-size-[200%_100%] animate-[flagMove_4s_linear_infinite]"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.75 rounded-b-xl 
              bg-linear-to-r from-black via-white to-red-500 
              bg-size-[200%_100%] animate-[flagMoveReverse_4s_linear_infinite]"
            />
            <h3 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-1 relative z-10">
              {achievement.prefix || ""}
              <AnimatedNumbers
                animateToNumber={Number(
                  achievement.value.toString().replace("%", ""),
                )}
                fontStyle={{ fontWeight: 700 }}
              />
              {achievement.postfix || ""}
            </h3>

            <p className="mt-2 text-center text-sm font-Ovo relative z-10">
              {achievement.metric || achievement.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
