import Aside from "./aside";
import Profilepicture from "../../images/profilepicture.svg";
import Frame1 from "../../images/User-acc/frame1.svg";
import Frame2 from "../../images/User-acc/frame2.svg";
import Frame3 from "../../images/User-acc/frame3.svg";

import { Link } from "react-router";

export default function Userpage() {
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
                <li>4M followers</li>
                <li>454 following</li>
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
