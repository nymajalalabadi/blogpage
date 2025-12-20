import PostContent from "@/components/posts/post-detail/post-content";

export default function DetailedPostPage( props ) {
  const { title, image, content, slug } = props;
  
  return (
    <PostContent title={title} image={image} content={content} slug={slug} />
  );
}