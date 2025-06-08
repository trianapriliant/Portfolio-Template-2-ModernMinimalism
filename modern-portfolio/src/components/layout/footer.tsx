import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo } from "@/data/portfolio";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Proyek", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.social.github,
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: personalInfo.social.twitter,
      color: "hover:text-blue-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: personalInfo.social.instagram,
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AS</span>
                </div>
                <span className="font-bold text-2xl text-foreground">
                  Trian Aprilianto
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-6">Ikuti Saya</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Dapatkan update terbaru tentang artikel dan proyek saya.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 {personalInfo.name}. Dibuat dengan</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>menggunakan React & TypeScript</span>
            </div>

            {/* Back to Top */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center space-x-2"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Kembali ke Atas</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20" />
      </div>
    </footer>
  );
}
