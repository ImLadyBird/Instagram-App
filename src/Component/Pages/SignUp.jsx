import { Link } from "react-router";
import insta from "../../images/instamain.svg";
export default function SignUp() {
  return (
    <div className="flex min-h-screen   items-center justify-center ">
      <div className="flex flex-col border-1 border-[#9b9191b0] p-[84px] gap-[26px]">
        <img src={insta} alt="Logo" className="max-w-[32`0px]" />
        <form className="flex flex-col gap-[18px]">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-[#8a8888]"
          />
          <input
            type="text"
            placeholder="User Name"
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-[#8a8888]"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-[#8a8888]"
          />
          <button
            type="submit"
            className="bg-[#44B8FA] text-white font-bold py-3 rounded-[12px] border-1 border-[#8a8888a9]"
          >
            Sign Up
          </button>
        </form>
        <div className="flex flex-row gap-1 justify-center">
          <p>Already have an account?</p>
          <Link to={"/login"} className="text-[#44B8FA]">Login</Link>
        </div>
      </div>
    </div>
  );
}