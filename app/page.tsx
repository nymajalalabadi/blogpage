import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import classes from "./page.module.css";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div className={classes.container}>
      <section className={classes.heroSection}>
        <Hero />
      </section>
      <div className={classes.content}>
        <section className={classes.postsSection}>
          <FeaturedPosts posts={featuredPosts} />
        </section>
      </div>
    </div>
  );
}
