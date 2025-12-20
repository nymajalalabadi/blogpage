import AllPosts from "@/components/posts/All-Posts";

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

export default function AllPostsPage() {
  return (
      <AllPosts posts={DUMMY_POSTS} />
  );
}