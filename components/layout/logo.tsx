import Link from "next/link";
import classes from "./logo.module.css";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Link href="/">
        Nima&apos;s Blog
      </Link>
    </div>
  );
}