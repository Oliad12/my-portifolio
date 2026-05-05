"use client";

import { workData } from "@/assets/assets";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const techIconMap: Record<string, string> = {
  "next.js": "nextjs-plain",
  "nextjs": "nextjs-plain",
  "next.js 15": "nextjs-plain",
  "react": "react-original",
  "typescript": "typescript-plain",
  "tailwind css": "tailwindcss-plain",
  "node.js": "nodejs-plain",
  "postgresql": "postgresql-plain",
  "mongodb": "mongodb-plain",
  "prisma": "prisma-original",
  "figma": "figma-plain",
  "git": "git-plain",
  "firebase": "firebase-plain",
  "redux": "redux-original",
  "chart.js": "d3js-plain",
  "spring boot": "spring-plain",
  "java": "java-plain",
  "docker": "docker-plain",
  "vercel": "vercel-plain",
  "clerk": "clerk-plain",
  "stripe": "stripe-plain",
  "cloudinary": "cloudinary-plain",
  "framer motion": "framermotion-plain",
  "convex": "convex-plain",
  "jwt": "jsonwebtokens-plain",
  "adobe xd": "xd-plain",
  "vscode": "vscode-plain",
};

const monochromeIcons = new Set(["nextjs-plain", "vercel-plain", "prisma-original"]);

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-26 px-4 md:px-[7%] lg:px-[14%] py-12 scroll-mt-20">
<section className="relative w-full h-48 sm:h-72 md:h-92 overflow-hidden rounded-xl">        <Image
          src={project.bgImage}
          alt={project.title}
          fill
          className="object-contain object-center"
          priority
        />
      </section>
      <div className="text-center mt-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 font-Ovo">
          {project.title}
        </h1>
        <p className="max-w-3xl text-sm sm:text-lg md:text-xl font-Ovo opacity-90">
          {project.description}
        </p>
      </div>
      {project.techStack && (
        <section className="mb-16 mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string, index: number) => {
              const iconKey = techIconMap[tech] ?? techIconMap[tech.toLowerCase()];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-2 border px-3 py-2 rounded-xl text-sm font-medium hover:bg-muted transition cursor-default"
                >
                  {iconKey ? (
                    <i
                      className={`devicon-${iconKey} ${monochromeIcons.has(iconKey) ? "" : "colored"} text-xl`}
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center text-xs font-bold">
                      {tech[0]}
                    </span>
                  )}
                  {tech}
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {project.problem && (
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            The Problem
          </h2>
          <ul className="list-disc list-inside space-y-2 text-foreground font-Ovo text-sm sm:text-base md:text-lg">
            {project.problem.map((item: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>
      )}

      {project.solution && (
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            The Solution
          </h2>
          <ul className="list-decimal list-inside space-y-2 text-foreground font-Ovo text-sm sm:text-base md:text-lg">
            {project.solution.map((item: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>
      )}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
            {project.screenshots.map((img: string, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {project.outcome && (
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground font-Ovo text-sm sm:text-base md:text-lg">
            {project.outcome.map((item: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>
      )}

      <div className="flex flex-wrap gap-6 mb-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="secondary" asChild>
                <Link href={project.gitUrl || "#"} target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>View Code</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="secondary" asChild>
                <Link href={project.previewUrl || "#"} target="_blank">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Live Preview</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-foreground transition-colors"
        >
          <Button variant="outline" className="px-3 py-2 cursor-pointer">
            <ArrowLeft size={18} />
            Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}




     