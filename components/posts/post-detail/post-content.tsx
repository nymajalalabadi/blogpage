import classes from "./post-content.module.css";
import PostHeader from "./post-header";

interface PostContentProps {
  title: string;
  image: string;
  content: string;
  slug: string;
}

export default function PostContent({ title, image, content, slug }: PostContentProps) {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <p>{content}</p>
    </article>
  );
}