import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { personalInfo, skills, experiences } from "@/data/portfolio";
import { Calendar, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

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

export function AboutPage() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: "Frontend Development",
    backend: "Backend Development", 
    tools: "Tools & Technologies",
    design: "Design & UI/UX"
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Tentang Saya
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mengenal lebih dekat tentang perjalanan karir, keahlian, dan pengalaman saya dalam dunia development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{personalInfo.name}</CardTitle>
                <CardDescription className="text-lg">
                  {personalInfo.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>

                <div className="flex justify-center space-x-3 pt-4">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Keahlian & Teknologi</CardTitle>
                  <CardDescription>
                    Teknologi dan tools yang saya kuasai dalam pengembangan aplikasi
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {categoryTitles[category as keyof typeof categoryTitles]}
                      </h3>
                      <div className="space-y-3">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center space-x-2 text-sm font-medium">
                                <span>{skill.icon}</span>
                                <span>{skill.name}</span>
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Pengalaman Kerja</CardTitle>
                  <CardDescription>
                    Perjalanan karir dan pengalaman profesional saya
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 pb-8 border-l-2 border-muted last:border-l-0"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                        
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold">{exp.position}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {exp.startDate} - {exp.current ? "Sekarang" : exp.endDate}
                              </span>
                              {exp.current && (
                                <Badge variant="secondary" className="text-xs">
                                  Saat ini
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {exp.description.map((desc, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
