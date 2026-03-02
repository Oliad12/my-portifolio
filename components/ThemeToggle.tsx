"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4" />
        <Switch disabled />
        <Moon className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
              <motion.div
        animate={{
          scale: theme === "light" ? 1.2 : 1,
          rotate: theme === "light" ? 0 : -90,
          opacity: theme === "light" ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
      <Sun
        className={`h-4 w-4 transition-colors ${
          theme === "light" ? "text-yellow-500" : "text-muted-foreground"
        }`}/>
        </motion.div>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
            <motion.div
        animate={{
          scale: theme === "dark" ? 1.2 : 1,
          rotate: theme === "dark" ? 0 : 90,
          opacity: theme=== "dark" ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
      <Moon
        className={`h-4 w-4 transition-colors ${
          theme === "dark" ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
      </motion.div>
    </div>
  );
}