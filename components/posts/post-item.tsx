import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

export default function PostItem( props ) {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${props.post.id}`}>
        <a>
          <div className={classes.image}>
            <Image src={props.post.image} alt={props.post.title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{props.post.title}</h3>
            <time>{props.post.date}</time>
            <p>{props.post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}