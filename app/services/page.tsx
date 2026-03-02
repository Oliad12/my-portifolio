
import { Services } from "@/components/Services";

export const metadata = {
  title: "Services | Tibebu Dereje",
  description:
    "Explore the professional web development services offered by Tibebu Dereje, including modern websites, dashboards, and custom applications.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <Services />
    </main>
  );
}
