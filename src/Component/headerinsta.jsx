import { useEffect, useState } from "react";
import BigProfile from "../images/icon/bigProfile.svg";
import { client } from "../Lib/idex";

export default function HeaderInsta() {
const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetchProfile()
  },[])

  async function fetchProfile(){
    try {
      const token = localStorage.getItem("token");
      const response = await client.get("/user/followings/johndoe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log(response.data);
    } catch {
      console.log("error");
    }
    
  }



  return (
    <div className="flex flex-row w-3/4 pt-9 gap-24 h-64 mt-9 items-center border-b border-zinc-200 pb-19 ">
      <img className=" rounded-[50%] " src={BigProfile} alt="BigProfile" />
      <div className="flex flex-col gap-">
        <div className="flex gap-10">
        <h2 className="text-2xl pb-3">upvox_</h2>
        </div>
        <ul className="flex flex-row gap-10">
          <li className="tex">11 post</li>
          <li>41 followers</li>
          <li>17 following</li>
        </ul>
        <div className="pt-3.5">
        <h3 className="text-[22px]">Upvox</h3>
        <p>Product/service</p>
        <p>Your favourite fun clips 🎦 in your language 🌎</p>
        <p className="text-blue-600">upvox.net</p>
      </div>
      </div>
    </div>
  );
}
