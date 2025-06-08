export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export const personalInfo = {
  name: "Trian Aprilianto",
  title: "Full Stack Developer & UI/UX Designer",
  bio: "Passionate developer dengan 5+ tahun pengalaman dalam membangun aplikasi web modern. Spesialisasi dalam React, TypeScript, dan desain pengalaman pengguna yang menakjubkan.",
  email: "trianapriliant@email.com",
  phone: "+62 812 3456 7890",
  location: "Jakarta, Indonesia",
  profileImage: "/images/profile.jpg",
  social: {
    github: "https://github.com/trianapriliant",
    linkedin: "https://linkedin.com/in/trianapriliant",
    twitter: "https://twitter.com/trianapriliant",
    instagram: "https://instagram.com/trianapriliant"
  }
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Modern",
    description: "Platform e-commerce full-stack dengan fitur pembayaran real-time, dashboard admin yang komprehensif, dan pengalaman berbelanja yang seamless.",
    longDescription: "Platform e-commerce yang dibangun dengan teknologi modern menggunakan Next.js, TypeScript, dan Prisma. Menampilkan sistem pembayaran terintegrasi, manajemen inventory real-time, dan dashboard analytics yang powerful. Dilengkapi dengan sistem rekomendasi AI dan chatbot customer service.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Redis"],
    category: "Full Stack",
    image: "/images/projects/ecommerce-hero.jpg",
    gallery: [
      "/images/projects/ecommerce-hero.jpg",
      "/images/projects/taskapp-hero.png",
      "/images/projects/portfolio-hero.jpg"
    ],
    demoUrl: "https://ecommerce-demo.trianapriliant.dev",
    githubUrl: "https://github.com/trianapriliant/ecommerce-platform",
    featured: true
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Aplikasi manajemen tugas kolaboratif dengan real-time updates, drag & drop functionality, dan dashboard analitik yang interaktif.",
    longDescription: "Aplikasi manajemen proyek yang memungkinkan tim berkolaborasi secara efektif. Fitur unggulan termasuk kanban board interaktif, time tracking, laporan produktivitas, dan integrasi dengan berbagai tools populer.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Chart.js"],
    category: "Web App",
    image: "/images/projects/taskapp-hero.png",
    gallery: [
      "/images/projects/taskapp-hero.png",
      "/images/projects/banking-hero.png"
    ],
    demoUrl: "https://taskapp-demo.trianapriliant.dev",
    githubUrl: "https://github.com/trianapriliant/task-management",
    featured: true
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website 3D",
    description: "Website portfolio interaktif dengan efek 3D yang memukau, animasi smooth, dan desain responsive yang modern.",
    longDescription: "Website portfolio pribadi yang menampilkan kemampuan dalam 3D web development menggunakan Three.js. Menampilkan efek visual yang menakjubkan sambil tetap mempertahankan performa dan accessibility.",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    image: "/images/projects/portfolio-hero.jpg",
    gallery: [
      "/images/projects/portfolio-hero.jpg"
    ],
    demoUrl: "https://trianapriliant.dev",
    githubUrl: "https://github.com/trianapriliant/portfolio-3d",
    featured: true
  },
  {
    id: "mobile-banking-ui",
    title: "Mobile Banking UI Design",
    description: "Desain UI/UX untuk aplikasi mobile banking dengan fokus pada keamanan, kemudahan penggunaan, dan estetika modern.",
    longDescription: "Prototype desain untuk aplikasi mobile banking yang mengutamakan user experience dan security. Penelitian mendalam tentang user behavior dan implementasi design system yang konsisten.",
    technologies: ["Figma", "Principle", "Adobe XD", "Sketch"],
    category: "UI/UX Design",
    image: "/images/projects/banking-hero.png",
    gallery: [
      "/images/projects/banking-hero.png",
      "/images/projects/ecommerce-hero.jpg"
    ],
    featured: false
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Service Bot",
    description: "Chatbot AI untuk customer service dengan natural language processing dan integrasi multi-platform.",
    longDescription: "Sistem chatbot yang menggunakan machine learning untuk memberikan customer service yang personal dan efisien. Dapat diintegrasikan dengan WhatsApp, Telegram, dan website.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket"],
    category: "AI/ML",
    image: "/images/projects/chatbot-hero.png",
    gallery: [
      "/images/projects/chatbot-hero.png"
    ],
    githubUrl: "https://github.com/trianapriliant/ai-chatbot",
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 88, category: "frontend", icon: "▲" },
  { name: "Vue.js", level: 85, category: "frontend", icon: "💚" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "🎨" },
  { name: "Three.js", level: 78, category: "frontend", icon: "🎯" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend", icon: "💚" },
  { name: "Python", level: 85, category: "backend", icon: "🐍" },
  { name: "PostgreSQL", level: 82, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 80, category: "backend", icon: "🍃" },
  { name: "Redis", level: 75, category: "backend", icon: "🔴" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "🔀" },
  { name: "Docker", level: 78, category: "tools", icon: "🐳" },
  { name: "AWS", level: 75, category: "tools", icon: "☁️" },
  { name: "Figma", level: 88, category: "design", icon: "🎨" },
];

export const experiences: Experience[] = [
  {
    id: "senior-developer",
    company: "TechFlow Solutions",
    position: "Senior Full Stack Developer",
    startDate: "2022-01",
    endDate: "",
    current: true,
    description: [
      "Memimpin tim development untuk membangun aplikasi enterprise dengan teknologi modern",
      "Mengimplementasikan arsitektur microservices yang scalable dan maintainable",
      "Mentoring junior developers dan melakukan code review untuk quality assurance",
      "Berkolaborasi dengan tim design untuk menciptakan user experience yang optimal"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: "fullstack-developer",
    company: "Digital Innovation Labs",
    position: "Full Stack Developer",
    startDate: "2020-03",
    endDate: "2021-12",
    current: false,
    description: [
      "Mengembangkan aplikasi web kompleks dengan fokus pada performa dan user experience",
      "Implementasi sistem CI/CD untuk automation deployment dan testing",
      "Optimasi database performance dan query optimization",
      "Kolaborasi cross-functional dengan tim product dan design"
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "GitLab CI"]
  },
  {
    id: "frontend-developer",
    company: "StartupHub Indonesia",
    position: "Frontend Developer",
    startDate: "2019-06",
    endDate: "2020-02",
    current: false,
    description: [
      "Membangun interface yang responsive dan interactive untuk berbagai platform",
      "Implementasi modern JavaScript frameworks dan best practices",
      "Kolaborasi dengan designer untuk pixel-perfect implementation",
      "Performance optimization dan accessibility compliance"
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"]
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Product Manager at TechFlow",
    content: "Alex adalah developer yang luar biasa. Kemampuan teknis yang kuat dikombinasikan dengan pemahaman bisnis yang mendalam. Hasil kerja selalu melampaui ekspektasi.",
    avatar: "/images/testimonials/sarah.jpg"
  },
  {
    id: "2", 
    name: "Michael Chen",
    position: "CEO at Digital Innovation Labs",
    content: "Bekerja dengan Alex selalu menyenangkan. Problem-solving skills yang excellent dan always deliver on time. Highly recommended!",
    avatar: "/images/testimonials/michael.jpg"
  },
  {
    id: "3",
    name: "Lisa Amanda",
    position: "Design Lead at StartupHub",
    content: "Alex memiliki eye for detail yang luar biasa dalam mengimplementasikan design. Kolaborasi yang smooth dan hasil yang selalu pixel-perfect.",
    avatar: "/images/testimonials/lisa.jpg"
  }
];
