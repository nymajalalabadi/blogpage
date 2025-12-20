export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}

export const POSTS_DATA: Post[] = [
  {
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Next.js",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs",
    content: "Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore the fundamentals of Next.js and learn how to create amazing web applications."
  },
  {
    title: "Getting Started with React",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using React",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs2",
    content: "React is a JavaScript library for building user interfaces. In this post, we'll explore the fundamentals of React and how to get started with your first React application. Learn about components, state, and props."
  },
  {
    title: "Getting Started with Angular",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Angular",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs3",
    content: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Let's dive into Angular and build something amazing! We'll cover components, services, and routing."
  },
  {
    title: "Getting Started with Vue",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Vue",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs4",
    content: "Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. Learn the basics and start building today!"
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS_DATA.find(post => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return POSTS_DATA;
}

export function getFeaturedPosts(): Post[] {
  return POSTS_DATA.slice(0, 4);
}

