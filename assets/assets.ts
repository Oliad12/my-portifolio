
import user_image from './user-image.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import profile_img1 from './profile-img1.png';
import profile_img2 from './tt.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import send_icon from './send-icon.png';

export const assets = {
    user_image,
    project_icon,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    profile_img1,
    profile_img2,
    download_icon,
    hand_icon,
    moon_icon,
    sun_icon,
    menu_black,
    menu_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    send_icon,
};

export const toolsData = [vscode, firebase, mongodb, figma, git];
export type ProjectType = "All" | "Full-Stack" | "SaaS" | "DevOps" | "AI /ML";

export const workData: {
  id: number;
  slug: string;
  title: string;
  description: string;
  bgImage: string;
  gitUrl: string;
  previewUrl: string;
  type: ProjectType; 
  problem: string[];
  solution: string[];
  techStack: string[];
  screenshots: string[];
  outcome: string[];
}[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Modern Portfolio Website",
    description: "A high-performance personal portfolio built with Next.js 16 and Tailwind CSS.",
    bgImage: "/porti.png",
    gitUrl: "https://github.com/Oliad12/my-portifolio.git",
    previewUrl: "https://tibe-port.vercel.app/",
    type: "Full-Stack", 
    problem: [
      "Needed a professional online presence to showcase projects and attract freelance/remote opportunities.",
      "Wanted a fast, SEO-optimized, and fully responsive platform.",
      "Required a modern UI with smooth animations and clean structure."
    ],
    solution: [
      "Built using Next.js App Router for optimal performance and SEO.",
      "Designed a fully responsive UI with Tailwind CSS.",
      "Added interactive animations using Framer Motion.",
      "Implemented reusable components and clean folder architecture.",
      "Optimized performance using image optimization and lazy loading."
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel"],
    screenshots: ["/porti.png"],
    outcome: [
      "Strengthened personal brand and online credibility.",
      "Improved recruiter visibility through SEO optimization.",
      "Generated freelance leads and networking opportunities."
    ]
  },
{
  id: 2,
  slug: "ai-expense-tracker",
  title: "AI Expense Tracker",
  description: "An intelligent expense tracking application that analyzes spending patterns and provides AI-powered financial insights.",
  bgImage: "/projects/expense/home3.png",
  gitUrl: "https://github.com/Oliad12/ai-powered-expense-tracker",
  previewUrl: "https://ai-expense-tracker.vercel.app",
  type: "AI /ML",
  problem: [
    "Many people struggle to track daily expenses and understand their spending habits.",
    "Traditional expense trackers only store data without giving useful financial insights.",
    "Users need smart recommendations to manage budgets and reduce unnecessary spending."
  ],
  solution: [
    "Built a full-stack expense tracking system with AI-powered financial insights.",
    "Integrated AI to analyze user expenses and generate personalized spending advice.",
    "Implemented visual charts and dashboards for clear financial overview.",
    "Added category-based tracking and smart summaries for better financial decisions."
  ],
  techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "OpenAI API",
    "Tailwind CSS",
    "Chart.js"
  ],
  screenshots: [
    "/projects/expense/dashboard.png",
    "/projects/expense/budget.png",
    "/projects/expense/transaction.png",
    "/projects/expense/expense.png"
  ],
  outcome: [
    "Users can track and categorize expenses efficiently.",
    "AI provides personalized financial insights and saving suggestions.",
    "Interactive dashboard visualizes spending trends and budgets.",
    "Demonstrates real-world AI + full-stack development skills."
  ]
},
  {
    id: 3,
    slug: "photography-website",
    title: "Photography Website",
    description: "A modern photography website built with Next.js, Tailwind CSS, Sanity CMS, and Cloudinary. Features responsive galleries, optimized images, and smooth animations.",
    bgImage: "/work-3.png",
    gitUrl: "https://github.com/Oliad12/modern-photography-portfolio.git",
    previewUrl: "",
    type: "Full-Stack",
    problem: [
      "Photographers needed an online portfolio to showcase their work professionally.",
      "Existing templates lacked customization and modern UI."
    ],
    solution: [
      "Designed a fully responsive UI/UX for photographers.",
      "Focused on showcasing images with a clean layout and smooth transitions.",
      "Optimized for mobile and desktop devices."
    ],
    techStack: ["Figma", "Nextjs", "Tailwind CSS", "Typescript", "Sanity CMS", "Cloudinary"],
    screenshots: ["/work-3.png"],
    outcome: [
      "Created an attractive app photography website.",
      "Demonstrated UI/UX design skills.",
      "Used as a portfolio piece for future clients."
    ]
  },
  {
    id: 4,
    slug: "ui-ux-design",
    title: "UI/UX Design Project",
    description: "UI/UX design case study highlighting wireframing, prototyping, and accessibility principles.",
    bgImage: "/work-4.png",
    gitUrl: "",
    previewUrl: "",
    type: "DevOps", 
    problem: [
      "Clients needed a design that follows modern UI/UX principles.",
      "Ensuring accessibility and usability was a challenge."
    ],
    solution: [
      "Created wireframes and prototypes using Figma.",
      "Applied best practices in usability and accessibility.",
      "Iterated based on feedback to improve interaction and flow."
    ],
    techStack: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    screenshots: ["/work-4.png"],
    outcome: [
      "Produced a professional design case study.",
      "Improved understanding of UI/UX design process.",
      "Can be presented as a portfolio project."
    ]
  },
  {
  id: 5,
  slug: "cms-project",
  title: "Content Management system",
  description: "A full-featured web-based CMS enabling users to create, manage, and publish content efficiently with role-based access and modern UX.",
  bgImage: "/projects/blog/blogging.jpg",
  gitUrl: "https://github.com/Tilahun-git/webserviceBlogApp_project.git",
  previewUrl: "https://cms-project.vercel.app",
  type: "Full-Stack",
  problem: [
    "Users needed a platform to manage content without technical knowledge.",
    "Managing multiple roles, permissions, and publishing workflow was complex."
  ],
  solution: [
    "Developed a responsive web application using Next.js and Tailwind CSS.",
    "Implemented role-based access control and user authentication using JWT.",
    "Integrated Hibernate ORM with PostgreSQL for scalable content storage.",
    "Added WYSIWYG editor and media upload functionality using cloudinary.",
    "Built admin dashboard for content approval, analytics, and workflow management."
  ],
  techStack: ["Next.js", "React", "Tailwind CSS", "Redux", "PostgreSQL", "JWT", "Spring Boot", "Hibernate", "RBAC", "Cloudinary"],
  screenshots: [
    "/projects/blog/cms-dashboard.png",
    "/projects/blog/user-dashboard.png",
    "/projects/blog/account.png"
  ],
  outcome: [
    "Delivered a fully functional CMS with user roles and workflow management.",
    "Simplified content creation and publishing for non-technical users.",
    "Enhanced portfolio by showcasing full-stack development skills.",
    "Can be deployed on Vercel with cloud storage and authentication integration."
  ]
}
];

export const serviceData = [
  {
    slug: "web",
    icon: assets.web_icon,
    title: "Business Websites",
    description: "High-performance, responsive websites built for growth and scalability.",
    details:"I build modern, fast, and SEO-optimized websites using industry best practices. From landing pages to full-stack platforms, my focus is performance, accessibility, and long-term scalability.",
    gradient: "from-indigo-500 to-purple-500",
    tech: ["Next.js", "React","TypeScript", "Tailwind CSS", "SEO", "REST APIs"],
    link: "/services/web"
  },
  {
    slug: "admin-dashboard",
    icon: assets.project_icon,
    title: "Admin Dashboards",
    description: "Custom dashboards to manage users, content, payments, and analytics.",
    details:"I develop secure, scalable admin dashboards with full CRUD capabilities and analytics visualization using Next.js, Prisma, and PostgreSQL.",
    gradient: "from-green-500 to-teal-500",
    tech: ["Next.js", "Prisma", "PostgreSQL", "JWT/Clerk"],
    link: "/services/admin-dashboard"
  },
  {
    slug: "ui-ux",
    icon: assets.ui_icon,
    title: "UI / UX Design",
    description: "Intuitive, user-centered designs that enhance engagement.",
    details:"I design clean and accessible interfaces backed by UX principles, wireframes, and usability testing—ensuring your product is easy to use and visually appealing.",
    gradient: "from-emerald-500 to-teal-500",
    tech: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    link: "/services/ui-ux"
  },
  {
    slug: "graphics",
    icon: assets.graphics_icon,
    title: "Graphic Design",
    description: "Creative visuals that strengthen your brand identity.",
    details:"I create professional brand assets including logos, banners, and marketing visuals that communicate clearly and align with your business goals.",
    gradient: "from-orange-500 to-amber-500",
    tech: ["Adobe Photoshop", "Illustrator", "Brand Identity", "Social Media Graphics"],
    link: "/services/graphics"
  }
];
export const testimonials = [
  {
    name: "Yobsan Dereje",
    role: "Project Manager",
    message:
      "Tibebu consistently delivers clean, scalable solutions and communicates clearly throughout the entire development cycle. A reliable and results-driven developer.",
    image: "/tt.png",
  },
  {
    name: "Dawit Tadesse",
    role: "Startup Founder",
    message:
      "Professional, proactive, and highly skilled. Tibebu helped turn our idea into a production-ready application faster than expected.",
    image: "/avatar-2.png",
  },
  {
    name: "Demeke Getane",
    role: "Tech Lead",
    message:
      "Outstanding full-stack developer. His expertise in modern frameworks and backend architecture significantly improved our platform performance.",
    image: "/avatar-3.png",
  },
  {
    name: "Sara Williams",
    role: "Product Manager",
    message:
      "Great attention to detail and strong ownership of tasks. Tibebu delivers high-quality code and always meets deadlines.",
    image: "/avatar-4.png",
  },
  {
    name: "Tilahun Tereke",
    role: "Teammate",
    message:
      "A dependable developer who understands both business needs and technical execution. Highly recommended for complex web applications.",
    image: "/avatar-5.png",
  },
  {
    name: "Natnael Asefa",
    role: "Startup CEO",
    message:
      "Clear communication, fast delivery, and exceptional problem-solving skills. I would gladly collaborate with Tibebu again.",
    image: "/avatar-6.png",
  },
];

export const achievementsList = [
  { postfix: "+", metric: "Projects", value: 50 },
  { prefix: "~", metric: "Users", value: 10 },
  { prefix: ">", metric: "Years", value: 3 },
  { postfix: "%", label: "On-time", value: 100 }
];

export const experienceData = [
  {
    company: "Bright Team Ethiopia",
    role: "Senior Frontend Developer",
    type: "Part-time",
    duration: "May 2025 – Present · 10 mos",
    location: "Remote · Addis Ababa, Bole",
    highlights: [
      "Built responsive web interfaces using Next.js, React.js, and TypeScript",
      "Collaborated with cross-functional teams to deliver scalable frontend solutions",
      "Implemented state management and optimized component performance",
    ],
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Woldia University",
    role: "Software Engineer",
    type: "Part-time",
    duration: "Jun 2022 – Jan 2026 · 3 yrs 8 mos",
    location: "Onsite · Woldia, Ethiopia",
    highlights: [
      "Designed and developed scalable software solutions",
      "Worked on business research and software design",
    ],
    skills: ["Software Design", "Team Collaboration", "Project Management", "Bootstrap", "Git", "Agile"],
  },
  {
    company: "Crosslight Software Inc",
    role: "Software Engineer Intern",
    type: "Internship",
    duration: "Mar 2025 – Jul 2025 · 5 mos",
    location: "Onsite · Addis Ababa, Ethiopia",
    highlights: [
      "Assisted in fullstack web development using Next.js and Node.js",
      "Collaborated with senior engineers on real-world projects",
    ],
    skills: ["React", "RESTful APIs", "Node.js", "Next.js", "Team Collaboration", "PostgreSQL", "Redux", "Shadcn/ui"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Woldia University",
    duration: "2021 – 2026",
    details: "Focused on software development, data structures, algorithms, databases, and modern web technologies.",
  },
  {
    degree: "Full-Stack Web Development Training",
    institution: "Online / Self-Taught",
    duration: "2023 – 2025",
    details: "Hands-on training in React, Next.js, TypeScript, Tailwind CSS, REST APIs, PostgreSQL, and modern frontend architecture.",
  },
  {
    degree: "High School Diploma",
    institution: "General Secondary Education",
    duration: "2016 – 2020",
    details: "Strong foundation in mathematics, logical thinking, and computer basics.",
  },
];