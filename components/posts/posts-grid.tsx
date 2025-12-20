import PostItem from "./post-item";
import classes from "./posts-grid.module.css";
import { Post } from "@/lib/posts-util";

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}