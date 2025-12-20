import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

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
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}