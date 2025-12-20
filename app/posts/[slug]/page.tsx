import PostContent from "@/components/posts/post-detail/post-content";
import { getPostBySlug } from "@/lib/posts-util";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
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