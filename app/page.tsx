import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import classes from "./page.module.css";
import { getFeaturedPosts } from "@/lib/posts-util";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to My Blog - Discover amazing articles about Next.js, React, JavaScript, and modern web development. Read featured posts and start your learning journey.",
  keywords: ["home", "blog", "featured posts", "nextjs", "react", "web development"],
  openGraph: {
    title: "Home | My Blog",
    description: "Welcome to My Blog - Discover amazing articles about Next.js, React, JavaScript, and modern web development.",
    type: "website",
  },
  twitter: {
    title: "Home | My Blog",
    description: "Welcome to My Blog - Discover amazing articles about Next.js, React, JavaScript, and modern web development.",
  },
};

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div className={classes.container}>
      <section className={classes.heroSection}>
        <Hero />
      </section>
      <div className={classes.content}>
        <section className={classes.postsSection}>
          <FeaturedPosts posts={featuredPosts} />
        </section>
      </div>
    </div>
  );
}
