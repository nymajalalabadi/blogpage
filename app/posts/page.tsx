import AllPosts from "@/components/posts/All-Posts";
import { getAllPosts } from "@/lib/posts-util";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all blog posts and articles. Find tutorials, guides, and insights about Next.js, React, JavaScript, and web development.",
  keywords: ["posts", "articles", "blog posts", "tutorials", "nextjs", "react", "javascript"],
  openGraph: {
    title: "All Posts | My Blog",
    description: "Browse all blog posts and articles. Find tutorials, guides, and insights about Next.js, React, JavaScript, and web development.",
    type: "website",
  },
  twitter: {
    title: "All Posts | My Blog",
    description: "Browse all blog posts and articles. Find tutorials, guides, and insights about Next.js, React, JavaScript, and web development.",
  },
};

export default function AllPostsPage() {
  const posts = getAllPosts();
  
  return (
    <AllPosts posts={posts} />
  );
}