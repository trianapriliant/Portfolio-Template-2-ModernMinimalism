import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/layout/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, skills, experiences } from "@/data/portfolio";
import { ArrowRight, Star, Trophy, Users, Code } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

export function HomePage() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const topSkills = skills.slice(0, 6);
  const stats = [
    { label: "Proyek Selesai", value: "15+", icon: Trophy },
    { label: "Klien Puas", value: "12+", icon: Users },
    { label: "Tahun Pengalaman", value: "5+", icon: Star },
    { label: "Teknologi", value: "20+", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pencapaian & Statistik
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beberapa angka yang merepresentasikan perjalanan karir saya dalam dunia development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proyek Unggulan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beberapa karya terbaik yang mencerminkan kemampuan dan dedikasi saya dalam development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                        ⭐ Unggulan
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild size="lg">
              <Link to="/projects" className="inline-flex items-center">
                Lihat Semua Proyek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Preview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Keahlian Utama
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Teknologi dan tools yang saya kuasai untuk membangun aplikasi modern dan berkualitas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button variant="outline" asChild size="lg">
              <Link to="/about" className="inline-flex items-center">
                Lihat Semua Keahlian
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Preview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pengalaman Terkini
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Posisi dan pencapaian terbaru dalam perjalanan karir profesional saya.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {experiences.slice(0, 2).map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      {exp.current && (
                        <Badge className="bg-green-100 text-green-800">
                          Saat ini
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {exp.startDate} - {exp.current ? "Sekarang" : exp.endDate}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.slice(0, 2).map((desc, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button variant="outline" asChild size="lg">
              <Link to="/about" className="inline-flex items-center">
                Lihat Riwayat Lengkap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Mari Berkolaborasi!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Punya proyek menarik? Saya siap membantu mewujudkan ide digital Anda menjadi kenyataan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact" className="inline-flex items-center">
                  Hubungi Saya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/projects" className="inline-flex items-center">
                  Lihat Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
