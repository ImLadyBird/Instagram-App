import Aside from "./aside";
import Profilepicture from "../../images/profilepicture.svg";
import Frame1 from "../../images/User-acc/frame1.svg";
import Frame2 from "../../images/User-acc/frame2.svg";
import Frame3 from "../../images/User-acc/frame3.svg";

import { Link } from "react-router";
import { client } from "../../Lib/idex";
import { useEffect, useState } from "react";

export default function Userpage() {
  const [followeing, setfollowing] = useState(3);
  const [followers, setfollowers] = useState(3);
  async function getData() {
    try {
      const token = localStorage.getItem("token");
      const res = await client.get("/user/followers/johndoe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const resFollowing = await client.get('/user/followings/johndoe',{
        headers: {
            Authorization: `Bearer ${token}`,
        }
      })

      const followeingArray = res.data.data.followings.length;
      setfollowing(followeingArray);
      console.log(followeingArray);


    //   const followersArray = res.data.data
    console.log(resFollowing.data.followings.length);
setfollowers(resFollowing.data.followings.length)    
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex ">
      <Aside />
      <div className="flex flex-col pl-20">
        <div className="max-w-9/12">
          <div className="flex flex-row w-3/4 pt-9 gap-24 h-64 mt-9 items-center border-b border-zinc-200 pb-19 ">
            <img
              className=" rounded-[50%] "
              src={Profilepicture}
              alt="BigProfile"
            />
            <div className="flex flex-col gap-">
              <div className="flex gap-10">
                <h2 className="text-2xl pb-3">mkbhd</h2>
              </div>
              <ul className="flex flex-row gap-10">
                <li className="tex">1,861 posts</li>
                <li>{followers} followers</li>
                <li>{followeing} following</li>
              </ul>
              <div className="pt-3.5">
                <h3 className="text-[22px]">Marques Brownlee</h3>
                <p>I promise I won't overdo the filters.</p>
                <p></p>
                <Link className="text-blue-600">mkbhmd.co</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  gap-2.5 mt-6 flex-wrap">
          <img src={Frame1} alt="" />
          <img src={Frame2} alt="" />
          <img src={Frame3} alt="" />
        </div>
      </div>
    </div>
  );
}
