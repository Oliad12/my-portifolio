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
  metadataBase: new URL("https://tibebudere.vercel.app"),

  title: {
    default: "Tibebu Dereje - Software Engineer | AI & Fullstack Developer | SaaS & Cloud Developer",
    template: "%s | Tibebu Dereje",
  },

  description:
    "Tibebu Dereje is a Full Stack Software Engineer specializing in AI systems, SaaS platforms, cloud computing, and scalable web applications.",

  keywords: [
    "Tibebu Dereje",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "Software Engineer Ethiopia",
    "SaaS Developer",
    "Node.js",
    "React Developer",
    "Cloud Computing",
    "DevOps",
  ],

  authors: [
    {
      name: "Tibebu Dereje",
      url: "https://tibebudere.vercel.app",
    },
  ],

  creator: "Tibebu Dereje",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Tibebu Dereje | Software Engineer & AI Developer",
    description:
      "Portfolio of Tibebu Dereje – building scalable AI-powered SaaS platforms and modern web applications.",
    url: "https://tibebudere.vercel.app",
    siteName: "Tibebu Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Tibebu Dereje Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tibebu Dereje | Software Engineer",
    description:
      "Full Stack Developer building AI-powered SaaS and scalable applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
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
