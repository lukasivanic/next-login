"use client";

import { useState } from "react";
import Link from "next/link";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div id="id">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] h-[650px] p-3 mx-auto rounded-2xl shadow-2xl"
      >
        <h1>Get started</h1>
        <h2>Create your account now</h2>
        <label className="name">User name</label>
        <input
          className="block w-full rounded-md border-0 py-1.5 px-3 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 active:ring-1 active:ring-gray-400 sm:text-sm sm:leading-6"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />

        <input className="button" type="submit" value="Signup" />
        <div className="acc-ask">
          Already have account?<Link href="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Register;
