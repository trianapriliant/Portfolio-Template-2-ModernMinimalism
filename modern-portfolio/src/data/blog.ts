export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-best-practices-2024",
    title: "React Best Practices untuk Developer di 2024",
    excerpt: "Panduan lengkap tentang best practices React modern, mulai dari hooks hingga performance optimization yang wajib diketahui setiap developer.",
    content: `
# React Best Practices untuk Developer di 2024

React terus berkembang dengan fitur-fitur baru yang powerful. Di artikel ini, kita akan membahas best practices yang harus diterapkan untuk membangun aplikasi React yang scalable dan maintainable.

## 1. Custom Hooks untuk Logic Reuse

Custom hooks adalah cara yang powerful untuk mengextract dan reuse stateful logic. Contoh implementasi:

\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## 2. Proper Error Boundaries

Error boundaries membantu menangani error dengan graceful:

\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
\`\`\`

## 3. Performance Optimization

- Gunakan React.memo untuk mencegah unnecessary re-renders
- Implement lazy loading dengan React.lazy
- Optimize bundle size dengan code splitting
- Use useCallback dan useMemo dengan bijak

## Kesimpulan

Dengan menerapkan best practices ini, aplikasi React Anda akan lebih robust, performant, dan mudah di-maintain.
    `,
    author: "Trian Aprilianto",
    publishDate: "2024-06-01",
    readTime: "8 menit",
    category: "Frontend",
    tags: ["React", "JavaScript", "Best Practices", "Performance"],
    image: "/images/blog/react-best-practices.png",
    featured: true
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns untuk Developer Pro",
    excerpt: "Menguasai pattern-pattern advanced TypeScript yang akan membuat code Anda lebih type-safe dan ekspressive.",
    content: `
# Advanced TypeScript Patterns untuk Developer Pro

TypeScript bukan hanya tentang menambahkan type ke JavaScript. Ada banyak pattern advanced yang bisa membuat code Anda lebih powerful dan ekspressive.

## 1. Conditional Types

Conditional types memungkinkan kita membuat type yang behavior-nya bergantung pada kondisi tertentu:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };
\`\`\`

## 2. Mapped Types

Mapped types sangat powerful untuk membuat type transformations:

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
\`\`\`

## 3. Template Literal Types

Fitur yang powerful untuk string manipulation di type level:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ButtonEvent = EventName<"click">; // "onClick"

type CSSProperty = \`--\${string}\`;
\`\`\`

## 4. Utility Types yang Berguna

- \`Record<K, V>\` - untuk object types
- \`Exclude<T, U>\` - untuk exclude types
- \`Extract<T, U>\` - untuk extract types
- \`ReturnType<T>\` - untuk function return types

## Kesimpulan

Dengan menguasai pattern-pattern advanced ini, Anda bisa membuat code TypeScript yang lebih robust dan expressive.
    `,
    author: "Trian Aprilianto",
    publishDate: "2024-05-28",
    readTime: "10 menit",
    category: "Programming",
    tags: ["TypeScript", "Advanced", "Types", "Patterns"],
    image: "/images/blog/typescript-patterns.png",
    featured: true
  },
  {
    id: "web-performance-optimization",
    title: "Web Performance Optimization: Panduan Lengkap",
    excerpt: "Strategi dan teknik untuk mengoptimalkan performa website agar loading time lebih cepat dan user experience lebih baik.",
    content: `
# Web Performance Optimization: Panduan Lengkap

Performa website yang baik adalah kunci untuk user experience yang excellent dan SEO yang optimal. Mari kita bahas strategi-strategi untuk meningkatkan performa web.

## 1. Core Web Vitals

Google menggunakan Core Web Vitals sebagai ranking factor:

### Largest Contentful Paint (LCP)
- Target: < 2.5 detik
- Optimasi: image optimization, lazy loading, preload critical resources

### First Input Delay (FID)
- Target: < 100ms
- Optimasi: minimize JavaScript, code splitting, web workers

### Cumulative Layout Shift (CLS)
- Target: < 0.1
- Optimasi: dimension attributes untuk images, reserve space untuk dynamic content

## 2. Image Optimization

Images sering menjadi bottleneck performa:

\`\`\`html
<!-- Modern image formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

## 3. Critical CSS

Inline critical CSS untuk above-the-fold content:

\`\`\`html
<style>
  /* Critical CSS here */
  .hero { ... }
  .navbar { ... }
</style>
<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
\`\`\`

## 4. JavaScript Optimization

- Code splitting dengan dynamic imports
- Tree shaking untuk remove unused code
- Minification dan compression
- Service Workers untuk caching

## Tools untuk Monitoring

- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools

## Kesimpulan

Performance optimization adalah proses yang ongoing. Selalu monitor dan optimize berdasarkan real user metrics.
    `,
    author: "Trian Aprilianto",
    publishDate: "2024-05-25",
    readTime: "12 menit",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development", "Core Web Vitals"],
    image: "/images/blog/web-performance.png",
    featured: false
  },
  {
    id: "modern-css-features",
    title: "CSS Modern Features yang Harus Anda Ketahui",
    excerpt: "Eksplorasi fitur-fitur CSS terbaru yang akan mengubah cara Anda membangun layout dan styling website.",
    content: `
# CSS Modern Features yang Harus Anda Ketahui

CSS terus berkembang dengan fitur-fitur baru yang powerful. Mari kita eksplorasi fitur-fitur modern yang akan membuat styling lebih mudah dan powerful.

## 1. CSS Grid & Flexbox

Kombinasi Grid dan Flexbox untuk layout yang powerful:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

## 2. CSS Custom Properties (Variables)

Dynamic styling dengan CSS variables:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #60a5fa;
  }
}
\`\`\`

## 3. Container Queries

Responsive design berdasarkan container size:

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: flex;
    gap: 1rem;
  }
}
\`\`\`

## 4. CSS Logical Properties

Properties yang aware terhadap writing modes:

\`\`\`css
.element {
  margin-inline: 1rem; /* margin-left & margin-right */
  padding-block: 2rem; /* padding-top & padding-bottom */
  border-inline-start: 1px solid #ccc; /* border-left dalam LTR */
}
\`\`\`

## 5. Modern Selectors

Selector-selector baru yang powerful:

\`\`\`css
/* :has() selector */
.card:has(.featured-badge) {
  border: 2px solid gold;
}

/* :where() dan :is() */
:is(h1, h2, h3):where(.title) {
  color: var(--heading-color);
}
\`\`\`

## Kesimpulan

Fitur-fitur modern CSS ini memberikan lebih banyak control dan flexibility dalam styling. Mulai eksplorasi dan implementasikan dalam proyek Anda!
    `,
    author: "Trian Aprilianto",
    publishDate: "2024-05-20",
    readTime: "9 menit",
    category: "CSS",
    tags: ["CSS", "Modern Features", "Layout", "Styling"],
    image: "/images/blog/modern-css.jpg",
    featured: false
  },
  {
    id: "node-js-microservices",
    title: "Membangun Microservices dengan Node.js dan Docker",
    excerpt: "Panduan step-by-step untuk membangun arsitektur microservices yang scalable menggunakan Node.js dan containerization.",
    content: `
# Membangun Microservices dengan Node.js dan Docker

Microservices architecture memberikan flexibility dan scalability untuk aplikasi enterprise. Mari kita pelajari cara implementasinya dengan Node.js dan Docker.

## 1. Arsitektur Microservices

Prinsip-prinsip dasar microservices:

- Single Responsibility per service
- Decentralized data management
- Communication via APIs
- Independent deployment
- Fault tolerance

## 2. Setup Basic Service

\`\`\`javascript
// user-service/server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
\`\`\`

## 3. Containerization dengan Docker

\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

USER node

CMD ["node", "server.js"]
\`\`\`

## 4. Service Communication

Implementasi inter-service communication:

\`\`\`javascript
// API Gateway pattern
const express = require('express');
const httpProxy = require('http-proxy-middleware');

const app = express();

app.use('/api/users', httpProxy({
  target: 'http://user-service:3001',
  changeOrigin: true
}));

app.use('/api/orders', httpProxy({
  target: 'http://order-service:3002',
  changeOrigin: true
}));
\`\`\`

## 5. Docker Compose Setup

\`\`\`yaml
version: '3.8'
services:
  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    depends_on:
      - user-service
      - order-service

  user-service:
    build: ./user-service
    environment:
      - DB_HOST=user-db
    depends_on:
      - user-db

  order-service:
    build: ./order-service
    environment:
      - DB_HOST=order-db
    depends_on:
      - order-db
\`\`\`

## 6. Best Practices

- Implement health checks
- Use environment-specific configurations
- Implement proper logging and monitoring
- Handle graceful shutdowns
- Use database per service pattern

## Kesimpulan

Microservices dengan Node.js dan Docker memberikan foundation yang solid untuk aplikasi yang scalable dan maintainable.
    `,
    author: "Trian Aprilianto",
    publishDate: "2024-05-15",
    readTime: "15 menit",
    category: "Backend",
    tags: ["Node.js", "Microservices", "Docker", "Architecture"],
    image: "/images/blog/microservices.webp",
    featured: true
  }
];

export const categories = ["Semua", "Frontend", "Backend", "Programming", "Performance", "CSS"];
