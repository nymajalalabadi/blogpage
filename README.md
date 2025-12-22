# 📝 My Blog - Next.js

A modern, full-featured blog built with **Next.js 16**, **TypeScript**, and **MongoDB**. Features a beautiful UI, markdown support, contact form, SEO optimization, and PWA capabilities.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)

## ✨ Features

### 📖 Blog Features
- **Markdown Support**: Write posts in Markdown with syntax highlighting
- **Dynamic Routing**: SEO-friendly URLs for individual posts
- **Featured Posts**: Highlight important articles on the homepage
- **Responsive Design**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized with Next.js App Router and static generation

### 🎨 UI/UX
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Dark/Light Mode Ready**: CSS variables for easy theme switching
- **Smooth Animations**: CSS transitions and hover effects
- **Accessible**: ARIA labels and semantic HTML

### 📱 Contact & Interaction
- **Contact Form**: Full-featured contact form with validation
- **Real-time Notifications**: Success/error feedback for user actions
- **MongoDB Integration**: Store contact messages in database

### 🚀 Performance & SEO
- **SEO Optimized**: Complete metadata, Open Graph, Twitter Cards
- **PWA Ready**: Service worker and manifest for app-like experience
- **Fast Builds**: Turbopack support for rapid development
- **Type Safety**: Full TypeScript coverage

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Syntax Highlighting**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **Font**: [Geist](https://vercel.com/font) (optimized by Next.js)

## 📁 Project Structure

```
blogpage/
├── app/                          # Next.js App Router
│   ├── api/contact/             # Contact form API
│   ├── contact/                 # Contact page
│   ├── posts/                   # Posts listing and individual posts
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage
├── components/                  # React components
│   ├── contact/                 # Contact form components
│   ├── home-page/               # Hero and featured posts
│   ├── layout/                  # Navigation and layout
│   ├── posts/                   # Post-related components
│   └── ui/                      # Reusable UI components
├── lib/                         # Utility functions
│   └── posts-util.ts            # Post data handling
├── posts/                       # Markdown blog posts
├── public/                      # Static assets
│   ├── images/                  # Images for posts and site
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # SEO sitemap
└── types/                       # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blogpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # MongoDB Connection (for contact form)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog
   ```

4. **Add blog posts**

   Place your Markdown files in the `posts/` directory. Each post should have frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-01"
   excerpt: "Brief description of your post"
   image: "/images/posts/your-post-image.jpg"
   isFeatured: true
   ---

   # Your Post Content

   Write your blog post here using Markdown...
   ```

5. **Add images**

   Place your images in `public/images/`:
   - `public/images/posts/` - Post images
   - `public/images/site/` - Site assets (favicon, OG images, etc.)

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## 📝 Writing Blog Posts

### File Structure
- Posts go in the `posts/` directory
- Use `.md` extension
- File name becomes the URL slug

### Frontmatter Fields
```yaml
---
title: "Post Title"           # Required
date: "2025-01-01"           # Required (YYYY-MM-DD)
excerpt: "Post description"   # Required
image: "/path/to/image.jpg"  # Required
isFeatured: true             # Optional (shows on homepage)
---
```

### Markdown Features
- **Headers**: `# ## ###`
- **Code blocks**: \`\`\`language
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Lists**: `- item` or `1. item`
- **Bold/Italic**: `**bold**` `*italic*`

## 🎨 Customization

### Styling
- Modify CSS modules in `components/**/*.module.css`
- Update global styles in `app/globals.css`
- Customize Tailwind in `tailwind.config.js`

### Metadata
- Update site info in `app/layout.tsx`
- Modify page-specific metadata in individual page files
- Change social media images in `public/images/site/`

### Database
- Contact form uses MongoDB
- Collection: `messages`
- Schema: `{ email, name, message, id, createdAt }`

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo, set build command to `npm run build`
- **Railway**: Use Docker or Node.js deployment
- **Self-hosted**: Build and serve static files

### Environment Variables for Production
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
MONGODB_URI=your_production_mongodb_uri
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [MongoDB](https://mongodb.com/) - NoSQL database
- [Vercel](https://vercel.com/) - Deployment platform

---

Built with ❤️ using Next.js and TypeScript
