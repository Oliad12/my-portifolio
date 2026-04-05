import { Inter, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import {Footer} from "@/components/layout/Footer";
import {Navbar} from "@/components/layout/Navbar";
import ChatBot from "@/components/ChatBot";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Tibebu Dereje - Software Engineer | AI & Fullstack Developer",
  description:
    "Portfolio of Tibebu Dereje, a Fullstack Developer specializing in AI, DevOps, and modern web applications.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://tibebudere.vercel.app"),

  verification: {
    google: "-uw8Oim3ps2RWq5I1WpddMsOw0ZHR9xwV6GOY1uNFHE",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${ovo.variable}
          font-sans antialiased bg-background text-foreground
          leading-8 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
           <Toaster richColors position="top-right" theme="dark"/>
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
