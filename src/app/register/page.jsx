"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/input";
import SubmitButton from "@/components/button";
import Label from "@/components/label";

function Register() {
  const [inputs, setInputs] = useState({});

  const inputHandle = (name, value) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(inputs);
  };
  return (
    <div id="id">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] h-[600px] font-inter p-9 mt-12 mx-auto rounded-3xl shadow-[0_0_20px_1px_#bebebe]"
      >
        <h1 className="text-[2.6rem] font-semibold">Get started</h1>
        <h2 className="text-base ml-1 mb-10 mt-2 text-stone-400 font-normal">
          Create your account now
        </h2>
        <Label labelValue="User name" />
        <Input name="name" type="text" inputHandle={inputHandle} />

        <Label labelValue="Email" />
        <Input name="email" type="email" inputHandle={inputHandle} />

        <Label labelValue="Password" />
        <Input type="password" name="password" inputHandle={inputHandle} />

        <SubmitButton value="Sign up" />
        <div className="text-sm text-stone-400 text-center">
          Already have account?{" "}
          <Link className="text-cyan-700 underline" href="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Register;
