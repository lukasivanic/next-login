import styles from "./page.module.css";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <Link href={"/login"}>Login</Link>
      <br />
      <Link href={"/register"}>Register</Link>
    </main>
  );
}
