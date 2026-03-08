import { HeroSection } from "@/components/home/HeroSection";
import { Projects } from "@/components/Projects";
import Testimonials from "@/components/home/Testimonials";
import Achievements from "@/components/home/Achievements";




export default function Home() {
 
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Projects />
      <Testimonials />
      <Achievements />
    </div>
  );
}
