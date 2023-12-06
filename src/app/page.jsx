import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href={"/login"}>Link</Link>
      <br />
      <Link href={"/register"}>Register</Link>
    </main>
  );
}
