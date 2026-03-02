"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { achievementsList } from "@/assets/assets";
import { useTheme } from "next-themes";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function Achievements() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full mt-5 px-3 md:px-7 lg:px-24 py-5 scroll-mt-20"> 
      <div className="sm:border rounded-md py-8 px-8 flex flex-col md:flex-row 
      items-center justify-between gap-6 max-w-5xl mx-auto">
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="relative flex flex-col items-center justify-center p-6 w-40 md:w-48 rounded-xl 
            bg-background/90 hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-linear-to-r
             from-indigo-500 via-purple-500 to-pink-500 animate-[gradient-btlr_3s_linear_infinite]" />

            <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-linear-to-r
             from-pink-500 to-indigo-500 via-purple-500 animate-[gradient-tbrl_3s_linear_infinite]" />

            <h3 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-1 relative z-10">
              {achievement.prefix || ""}
              <AnimatedNumbers
                animateToNumber={Number(
                  achievement.value.toString().replace("%", "")
                )}
                fontStyle={{ fontWeight: 700 }}
              />
              {achievement.postfix || ""}
            </h3>

            <p
              className={`mt-2 text-center text-sm relative z-10 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {achievement.metric || achievement.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
