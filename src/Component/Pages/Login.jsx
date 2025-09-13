import insta from "../../images/instamain.svg";
import picInsta from "../../images/picInsta.svg"
import { Link } from "react-router";



export default function Login() {
    return (

        <div className="flex min-h-screen items-center justify-center gap-8">
            <div>
                <img src={picInsta} alt="pic" className="max-h-[666px]" />
            </div>
        <div className="flex flex-col border-1 border-[#9b9191b0] p-[50px] gap-2 ">
          <img src={insta} alt="Logo" className="max-w-320px" />

         <form className="flex flex-col gap-[18px]">
         <input className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-1[8a8888]" type="text" placeholder="User Name" />
         <input className="bg-gray-100 px-8 py-4 rounded-[8px] border-1 border-1[8a8888]" type="password" placeholder="Password" />
         <button type="submit" className="bg-[#44B8FA] text-white font-bold py-3 rounded-[12px] border-1 border-[#8a8888a9]">Log in</button> 
         </form>
         <div className="flex flex-row gap-1 justify-center">
          <p>Don’t have an account?</p>
         <Link to={"/login"} className="text-[#44B8FA]">
            Login
          </Link>
        </div>
         </div>
        </div>
        
           
        
    )
}