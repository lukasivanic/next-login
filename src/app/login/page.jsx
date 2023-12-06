import Link from "next/link";
import Input from "@/components/input";
import SubmitButton from "@/components/button";
import Label from "@/components/label";

export default function Login() {
  return (
    <form
      className="w-[450px] h-[500px] font-inter p-9 mt-12 mx-auto rounded-3xl shadow-[0_0_20px_1px_#bebebe]"
      action=""
    >
      <h1 className="text-[2.6rem] font-semibold">Welcome back!</h1>
      <h2 className="text-base ml-1 mb-10 mt-2 text-stone-400 font-normal">
        Login to you account
      </h2>
      <Label labelValue="User name" />
      <Input name="name" type="text" />

      <Label labelValue="Password" />
      <Input type="password" name="password" />

      <SubmitButton value="Login" />
      <div className="text-sm text-stone-400 text-center">
        Don&apos;t have account?{" "}
        <Link className="text-cyan-700 underline" href="/register">
          Sign in
        </Link>
      </div>
    </form>
  );
}
