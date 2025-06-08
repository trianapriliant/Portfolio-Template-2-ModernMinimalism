import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/3d/hero-background";
import { personalInfo } from "@/data/portfolio";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const socialVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5 + i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="space-y-2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              👋 Selamat datang di portfolio saya
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-foreground">Saya </span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>
            
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
            >
              {personalInfo.title}
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Saya
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: personalInfo.social.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
                >
                  <Icon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/50 hover:bg-background/30 transition-colors duration-200"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
            <span className="sr-only">Scroll ke bawah</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
