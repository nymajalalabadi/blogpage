import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Next.js",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with React",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using React",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started with Angular",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Angular",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting Started with Vue",
    image: "getting-started-nextjs.png",
    excerpt: "Learn how to build a personal website using Vue",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs4",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
