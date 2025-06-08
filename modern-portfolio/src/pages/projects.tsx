import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const categories = ["Semua", "Full Stack", "Frontend", "Web App", "UI/UX Design", "AI/ML"];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "Semua" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Portfolio Proyek
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kumpulan proyek terbaik yang telah saya kerjakan, mulai dari aplikasi web modern hingga desain UI/UX yang menakjubkan.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Proyek Unggulan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
                featured
              />
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-lg font-medium">Filter Kategori:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Semua Proyek</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  hoveredProject: string | null;
  setHoveredProject: (id: string | null) => void;
  featured?: boolean;
}

function ProjectCard({ project, index, hoveredProject, setHoveredProject, featured = false }: ProjectCardProps) {
  const isHovered = hoveredProject === project.id;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHoveredProject(project.id)}
      onHoverEnd={() => setHoveredProject(null)}
      className={`group ${featured ? 'md:col-span-1' : ''}`}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 hover:border-primary/20">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          />
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <div className="flex space-x-3">
              {project.demoUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                ⭐ Unggulan
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Detail
                </Button>
              </DialogTrigger>
              <ProjectModal project={project} />
            </Dialog>

            <div className="flex space-x-2">
              {project.demoUrl && (
                <Button size="sm" variant="ghost" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="ghost" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Main Image */}
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Deskripsi Proyek</h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Teknologi yang Digunakan</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Galeri</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-4 pt-4 border-t">
          {project.demoUrl && (
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Lihat Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Lihat Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </DialogContent>
  );
}
