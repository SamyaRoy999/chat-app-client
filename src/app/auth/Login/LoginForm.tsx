"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: number | string | boolean;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-zinc-800 max-w-[300px] flex justify-center  shadow-lg rounded-lg p-5"
    >
      <div>
        <div className="mb-3">
          <label>Email</label> <br />
          <input
            className="bg-slate-300 p-2 w-[250px] rounded-lg text-sm"
            {...register("email")}
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <br />
          <input
            className="bg-slate-300 p-2  w-[250px] rounded-lg text-sm"
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 border text-white mt-3 w-[250px] border-black px-2 py-1 rounded-md"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
