import { useForm } from "react-hook-form";
import insta from "../../images/instamain.svg";
import picInsta from "../../images/picInsta.svg";
import { Link } from "react-router";
import { client } from "../../Lib/idex";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const forSchema = z.object({
  username: z
    .string()
    .min(3, { message: "must be atleast 3 characters" })
    .max(20, { message: "must be atmost 20 characters" }),
  password: z
    .string()
    .min(8, { message: "must be atleast 8 characters" })
    .max(20, { message: "must be atmost 20 characters" }),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forSchema),
  });

  async function loginFunc({ username, password }) {
    try {
      const response = await client.post("/user/login", { username, password });
      localStorage.setItem("token", response.data.jwt);
      console.log(response);
    } catch {
      console.log("error");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center gap-8">
      <div>
        <img src={picInsta} alt="pic" className="max-h-[666px]" />
      </div>
      <div className="flex flex-col border-1 border-[#9b9191b0] p-[50px] gap-2 ">
        <img src={insta} alt="Logo" className="max-w-320px" />

        <form
          className="flex flex-col gap-[18px]"
          onSubmit={handleSubmit(loginFunc)}
        >
          <input
            {...register("username")}
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-1[8a8888]"
            type="text"
            placeholder="User Name"
          />
          <span className="text-red-500">{errors?.username?.message}</span>
          <div className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-1[8a8888] flex gap-15">
            <input
            className="border-none bg-transparent outline-none"
              {...register("password")}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              value="show"
            >
              show
            </button>
          </div>
          <span className="text-red-500">{errors?.password?.message}</span>
          <button
            type="submit"
            className="bg-[#44B8FA] text-white font-bold py-3 rounded-[12px] border-1 border-[#8a8888a9]"
          >
            Log in
          </button>
        </form>
        <div className="flex flex-row gap-1 justify-center">
          <p>Don’t have an account?</p>
          <Link to={"/login"} className="text-[#44B8FA]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
