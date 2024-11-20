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
        {/* google login  */}
        <div className="px-6 sm:px-0 w-[250px] flex ">
          <button
            type="button"
            className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google<div></div>
          </button>
          {/* facebook login */}
          <button
            type="button"
            className="text-white w-full flex   bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
            Facebook<div></div>
          </button>
        </div>
        {/* google login end */}
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
