import PostContent from "@/components/posts/post-detail/post-content";
import { getPostBySlug } from "@/lib/posts-util";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} - An article about web development and programming.`,
    keywords: ["blog post", "article", post.title, "web development"],
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} - An article about web development and programming.`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: ["Your Name"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} - An article about web development and programming.`,
      images: [post.image],
    },
  };
}

export default async function DetailedPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }
  
  return (
    <PostContent 
      title={post.title} 
      image={post.image} 
      content={post.content} 
      slug={post.slug} 
    />
  );
}