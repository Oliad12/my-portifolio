import { Contact } from "@/components/Contact";

export const metadata = {
  title: "Contact | Tibebu Dereje",
  description:
     "Get in touch with Tibebu Dereje for collaborations, projects, or inquiries about web and mobile development.",
};

export default function HomePage() {
  return (
    <main className="pt-16 sm:pt-20">
      <Contact isDark />
    </main>
  );
}
