import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { personalInfo } from "@/data/portfolio";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  subject: z.string().min(5, "Subjek harus minimal 5 karakter"),
  message: z.string().min(10, "Pesan harus minimal 10 karakter"),
});

type ContactForm = z.infer<typeof contactSchema>;

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

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.social.github,
      color: "hover:text-gray-600"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: personalInfo.social.twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: personalInfo.social.instagram,
      color: "hover:text-pink-600"
    }
  ];

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
            Hubungi Saya
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mari berkolaborasi! Saya siap membantu mewujudkan proyek digital impian Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                <CardDescription>
                  Jangan ragu untuk menghubungi saya melalui berbagai cara di bawah ini.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Details */}
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">{personalInfo.email}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-muted-foreground">{personalInfo.phone}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Ikuti Saya</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="sr-only">{social.name}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="pt-6 border-t">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Tersedia untuk Proyek</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Saat ini saya terbuka untuk proyek freelance dan kolaborasi menarik.
                    Response time biasanya dalam 24 jam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Ceritakan tentang proyek Anda atau sekedar menyapa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Alert className="border-green-200 bg-green-50 text-green-800">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Pesan berhasil dikirim! Saya akan membalas dalam 24 jam.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Alert className="border-red-200 bg-red-50 text-red-800">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via email.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        placeholder="Masukkan nama Anda"
                        {...form.register("name")}
                        className={form.formState.errors.name ? "border-red-500" : ""}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-red-500" : ""}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      placeholder="Tentang apa pesan Anda?"
                      {...form.register("subject")}
                      className={form.formState.errors.subject ? "border-red-500" : ""}
                    />
                    {form.formState.errors.subject && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      {...form.register("message")}
                      className={form.formState.errors.message ? "border-red-500" : ""}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Kirim Pesan</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
