import { Projects } from "@/components/Projects";


export const metadata = {
  title: "Projects | Tibebu Dereje",
  description:
    "Welcome to the portfolio of Tibebu Dereje, showcasing full-stack web and mobile projects, achievements, and more.",
};

export default function HomePage() {
  return (
    <main className="pt-16 sm:pt-20">
      <Projects />
    </main>
  );
}
