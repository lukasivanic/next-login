import Link from "next/link";

export default function Login() {
  return (
    <form action="">
      <h1>Welcome back!</h1>
      <h2>Login to you account</h2>
      <label className="name" htmlFor="name">
        User name
      </label>
      <input type="text" id="name" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" />

      <input className="button" type="submit" value="Login" />
      <div className="acc-ask">
        Don&apos;t have account?<Link href="/register"> Sign in</Link>
      </div>
    </form>
  );
}
