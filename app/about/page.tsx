import  {AboutSection}  from "@/components/about me/AboutSection";
import { ExperienceSection } from "@/components/about me/ExperienceSection";
import { SkillsSection } from "@/components/about me/Skill";


export const metadata = {
  title: "About | Tibebu Dereje",
  description:
    "Learn more about Tibebu Dereje, a full-stack developer building modern, AI-powered web and mobile applications.",
};

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
