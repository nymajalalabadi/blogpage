import Link from "next/link";
import Image from "next/image";

export default function PostItem( props ) {
  return (
    <li>
      <Link href={`/posts/${props.post.id}`}>
        <a>
          <Image src={props.post.image} alt={props.post.title} width={300} height={200} />
        </a>
      </Link>
    </li>
  );
}