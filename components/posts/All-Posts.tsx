import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";
import { Post } from "@/lib/posts-util";

interface AllPostsProps {
  posts: Post[];
}

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}