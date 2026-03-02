"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X } from "lucide-react";

const portfolioData = {
  about: `Tibebu Dereje is a Full Stack Developer and AI-focused Software Engineer.
He specializes in building modern web applications and AI-powered systems.
Committed to clean UI, scalable code, and professional solutions.`,
  services: [
    "Full Stack Web Development (Next.js, React, Node.js, Prisma)",
    "AI Integration & Automation",
    "E-commerce Development",
    "Portfolio & Business Websites",
  ],
  skills: [
    "Frontend: React, Next.js, Tailwind CSS, ShadCN UI",
    "Backend: Node.js, Express.js, Prisma, PostgreSQL/MySQL",
    "AI & Automation: OpenAI API, ChatGPT integration",
    "Tools: Git, GitHub, Vercel, Docker, Cloudinary",
    "Languages: JavaScript, TypeScript, HTML, CSS",
  ],
  projects: [
    "AI-Powered Ecommerce Platform – Smart furniture ecommerce system",
    "Photography Website Platform – Online booking and gallery system",
    "AI SaaS Application – Smart assistant-based system",
  ],
  whyClients: [
    "Clean and professional UI design",
    "Fast and scalable applications",
    "AI-powered solutions",
    "Strong communication",
    "Reliable and committed to deadlines",
  ],
  contact: [
    "Email: tibebudere22@email.com",
    "Telegram: @tibebu",
    "LinkedIn: linkedin.com/in/tibebu12",
  ],
};

// ---- AI Response Logic ----
const getAIResponse = (key: string) => {
  const createList = (items: string[], page?: string) =>
    items.map((i) => `• ${i}`).join("<br/>") +
    (page ? `<br/><br/><a href="${page}" class="text-indigo-600 underline">[See more]</a>` : "");

  switch (key) {
    case "about":
      return portfolioData.about;
    case "services":
      return createList(portfolioData.services, "/services");
    case "skills":
      return createList(portfolioData.skills, "/about");
    case "projects":
      return createList(portfolioData.projects, "/projects");
    case "whyClients":
      return createList(portfolioData.whyClients, "/services");
    case "contact":
      return createList(portfolioData.contact, "/contact");
    default:
      return `I'm here to help with Tibebu's portfolio. <a href="/about" class="text-indigo-600 underline">[Learn more]</a>`;
  }
};

// ---- ChatBot Component ----
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I'm Tibebu's AI Assistant. Ask me about his portfolio!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = (key?: string) => {
    const msg = key ?? input.trim();
    if (!msg) return;

    const userMsg = { role: "user", content: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply = getAIResponse(key ?? msg.toLowerCase());
      setMessages((prev) => [...prev, { role: "assistant", content: reply, timestamp: new Date() }]);
      setLoading(false);
    }, 500);
  };

  const quickReplies = [
    { label: "Who are you?", value: "about" },
    { label: "Services", value: "services" },
    { label: "Projects", value: "projects" },
    { label: "Skills", value: "skills" },
    { label: "Why Clients Choose Me?", value: "whyClients" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <div className="fixed bottom-6 right-0 flex flex-col  items-end z-50">
      {/* Floating Toggle Button */}
      <Button
        onClick={() => setOpen(!open)}
        className="rounded-full h-12 w-12 shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-all"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </Button>

      {/* Chat Panel */}
      {open && (
        <Card className="mt-2 w-[95vw] sm:w-96 max-h-[84vh] flex flex-col rounded-3xl shadow-2xl border border-gray-200 bg-white ">
          {/* Header */}
          <div className="px-4 py-3 font-semibold text-sm border-b bg-indigo-600 text-foreground rounded-t-3xl">
           Tibebu Assistant
          </div>

          {/* Messages */}
          <ScrollArea ref={scrollRef} className="flex-1 px-4 py-5 space-y-8 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed rounded-2xl shadow-sm wrap-break-word ${
                    msg.role === "assistant"
                      ? "text-white bg-gray-600"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  <span dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, "<br/>") }} />
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 text-sm bg-gray-100 rounded-2xl dark:bg-gray-800 dark:text-gray-100 animate-pulse">
                  tibe Typing...
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Quick Reply Buttons */}
          <div className="px-3 py-2 flex flex-wrap gap-2 border-t bg-white rounded-b-3xl">
            {quickReplies.map((btn) => (
              <button
                key={btn.label}
                onClick={() => sendMessage(btn.value)}
                className="text-xs px-3 py-1 rounded-full text-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="px-3 py-3 border-t flex gap-2 bg-background rounded-b-3xl">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="text-sm h-9 bg-gray-900 text-white"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button
              onClick={() => sendMessage()}
              className="h-9 px-4 text-sm bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
            >
              Send
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}