import classes from "./post-content.module.css";
import PostHeader from "./post-header";

export default function PostContent( props ) {
  const { title, image, content, slug } = props;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <p>{content}</p>
    </article>
  );
}