import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { Post } from "@/lib/posts-util";

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}