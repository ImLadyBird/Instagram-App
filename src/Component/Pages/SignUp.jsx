import insta from "../../images/instamain.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "../../Lib/idex";
import { useNavigate, Link } from "react-router";
import { useState } from "react";

const forSchema = z.object({
  username: z
    .string()
    .min(3, { message: "must be atleast 3 characters" })
    .max(20, { message: "must be atmost 20 characters" }),
  email: z.email({ message: "invalid email format" }),
  password: z
    .string()
    .min(8, { message: "must be atleast 8 characters" })
    .max(20, { message: "must be atmost 20 characters" }),
});

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forSchema),
  });

  async function subForm(data) {
    try {
      const response = await client.post("/user/signup", data);
      navigate("/login");
      console.log(response.data);
    } catch {
      console.log("error");
    }
  }

  return (
    <div className="flex min-h-screen   items-center justify-center ">
      <div className="flex flex-col border-1 border-[#9b9191b0] p-[84px] gap-[26px]">
        <img src={insta} alt="Logo" className="max-w-[320px]" />

        <form
          onSubmit={handleSubmit(subForm)}
          className="flex flex-col gap-[18px]"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-[#8a8888]"
          />
          <span className="text-red-500">{errors?.email?.message}</span>
          <input
            {...register("username")}
            type="text"
            placeholder="User Name"
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-[#8a8888]"
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
            Sign Up
          </button>
        </form>
        <div className="flex flex-row gap-1 justify-center">
          <p>Already have an account?</p>
          <Link to={"/login"} className="text-[#44B8FA]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
