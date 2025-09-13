import insta from "../../images/instamain.svg";
import Home from "../../images/Home.svg"
import Search from "../../images/Search.svg"
import Create from "../../images/Create.svg"
import Profile from "../../images/Profile.svg"






export default function Aside() {
  return (
    <div className="p-5">
      <div>
        <img src={insta} alt="" className="max-h-[35px] mb-4" />
        <div className="flex gap-4 flex-col">
        <p className="flex flex-row gap-2" ><img src={Home} alt="Home-Logo" /> Home</p>
        <p className="flex flex-row gap-2" ><img src={Search} alt="Search-Logo" />Search</p>
        <p className="flex flex-row gap-2" ><img src={Create} alt="Create-Logo" />Create</p>
        <p className="flex flex-row gap-2" ><img src={Profile} alt="Profile-Logo" />Profile</p>
        </div>
        
      </div>
    </div>
  );
}
