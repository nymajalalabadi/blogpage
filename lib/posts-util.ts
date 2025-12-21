import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
   const slugPost = slug.replace(/\.md$/, "");

    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      image: data.image,
      excerpt: data.excerpt,
      date: data.date,
      slug: slugPost,
      content: content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return undefined;
  }
}

export function getAllPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          title: data.title,
          image: data.image,
          excerpt: data.excerpt,
          date: data.date,
          slug: slug,
          content: content,
        };
      })
      .sort((a, b) => (a.date > b.date ? -1 : 1));

    return allPostsData;
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, 4);
}

