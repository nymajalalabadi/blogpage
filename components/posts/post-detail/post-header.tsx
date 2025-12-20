import classes from "./post-header.module.css";
import Image from "next/image";

interface PostHeaderProps {
  title: string;
  image: string;
}

export default function PostHeader({ title, image }: PostHeaderProps) {
  return (
    <header className={classes.header}>
      <h1>
        {title}
      </h1>
      <Image src={image} alt={title || "Post image"} width={200} height={150} />
    </header>
  );
}