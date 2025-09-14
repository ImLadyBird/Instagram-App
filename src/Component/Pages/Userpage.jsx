import Aside from "./aside";
import Profilepicture from "../../images/profilepicture.svg";
import Frame1 from "../../images/User-acc/frame1.svg";
import Frame2 from "../../images/User-acc/frame2.svg";
import Frame3 from "../../images/User-acc/frame3.svg";
import Frame4 from "../../images/User-acc/frame4.svg";
import Frame5 from "../../images/User-acc/frame5.svg";
import Frame6 from "../../images/User-acc/frame6.svg";
import Frame7 from "../../images/User-acc/frame7.svg";
import Frame8 from "../../images/User-acc/frame8.svg";
import Frame9 from "../../images/User-acc/frame9.svg";
import Frame10 from "../../images/User-acc/frame10.svg";
import Frame11 from "../../images/User-acc/frame11.svg";
import Frame12 from "../../images/User-acc/frame12.svg";
import Frame13 from "../../images/User-acc/frame13.svg";
import Frame14 from "../../images/User-acc/frame14.svg";
import Frame15 from "../../images/User-acc/frame15.svg";
import Frame16 from "../../images/User-acc/frame16.svg";
import Frame17 from "../../images/User-acc/frame17.svg";
import Frame18 from "../../images/User-acc/frame18.svg";
import Frame19 from "../../images/User-acc/frame19.svg";
import Frame20 from "../../images/User-acc/frame20.svg";
import Frame21 from "../../images/User-acc/frame21.svg";
import Frame22 from "../../images/User-acc/frame22.svg";
import Frame23 from "../../images/User-acc/frame23.svg";
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
          <img src={Frame4} alt="" />
          <img src={Frame5} alt="" />
          <img src={Frame6} alt="" />
          <img src={Frame7} alt="" />
          <img src={Frame8} alt="" />
          <img src={Frame9} alt="" />
          <img src={Frame10} alt="" />
          <img src={Frame11} alt="" />
          <img src={Frame12} alt="" />
          <img src={Frame13} alt="" />
          <img src={Frame14} alt="" />
          <img src={Frame15} alt="" />
          <img src={Frame16} alt="" />
          <img src={Frame17} alt="" />
          <img src={Frame18} alt="" />
          <img src={Frame19} alt="" />
          <img src={Frame20} alt="" />
          <img src={Frame21} alt="" />
          <img src={Frame22} alt="" />
          <img src={Frame23} alt="" />
        </div>
      </div>
    </div>
  );
}
