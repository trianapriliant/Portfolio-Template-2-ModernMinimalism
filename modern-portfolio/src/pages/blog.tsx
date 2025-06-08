import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, categories, type BlogPost } from "@/data/blog";
import { Search, Clock, User, Calendar, ArrowRight, Filter } from "lucide-react";

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

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Semua" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

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
            Blog & Artikel
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Berbagi pengetahuan, tips, dan insights tentang dunia development, teknologi terbaru, dan best practices.
          </p>
        </motion.div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Artikel Unggulan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-lg font-medium">Kategori:</span>
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

        {/* All Articles */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {searchQuery 
                ? `Hasil Pencarian "${searchQuery}"` 
                : selectedCategory === "Semua" 
                  ? "Semua Artikel" 
                  : `Artikel ${selectedCategory}`
              }
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} artikel ditemukan
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold mb-2">Tidak Ada Artikel</h3>
                  <p className="text-muted-foreground">
                    Tidak ditemukan artikel yang sesuai dengan pencarian Anda.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Tetap Update dengan Konten Terbaru
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dapatkan artikel terbaru, tips programming, dan insights teknologi langsung ke email Anda.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Email Anda"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 hover:border-primary/20">
        {/* Post Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{post.category}</Badge>
            {post.featured && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                ⭐ Unggulan
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          
          <CardDescription className="line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishDate).toLocaleDateString('id-ID')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{post.tags.length - 3}
              </Badge>
            )}
          </div>

          {/* Read More Button */}
          <div className="pt-4">
            <Button variant="outline" className="w-full group/btn" asChild>
              <Link to={`/blog/${post.id}`}>
                Baca Selengkapnya
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function FeaturedPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 hover:border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              ⭐ Unggulan
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishDate).toLocaleDateString('id-ID')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <Button className="w-full" asChild>
            <Link to={`/blog/${post.id}`}>
              Baca Artikel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
