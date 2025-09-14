import insta from "../../images/instamain.svg";
import Home from "../../images/Home.svg";
import Search from "../../images/Search.svg";
import Create from "../../images/Create.svg";
import Profile from "../../images/Profile.svg";
import { Link, NavLink } from "react-router";

export default function Aside({ toggleSearch }) {
  return (
    <div className="p-5 w-1/4">
      <div>
        <img src={insta} alt="" className="max-h-[35px] mb-4 " />
        <div className="flex gap-4 flex-col">
          <NavLink to={"/login/postcard"} className="flex flex-row gap-2">
            <img src={Home} alt="Home-Logo" /> Home
          </NavLink>
          <NavLink
            to={"/login/postcard/search"}
            className="flex flex-row gap-2"
          >
            <img src={Search} alt="Search-Logo" />
            <button onClick={toggleSearch} className="cursor-pointer">Search</button>
          </NavLink>
          <NavLink to={"/login/postcard/createpost"} className="flex flex-row gap-2">
            <img src={Create} alt="Create-Logo" />
            Create
          </NavLink>
          <NavLink
            to={"/login/postcard/profile"}
            className="flex flex-row gap-2"
          >
            <img src={Profile} alt="Profile-Logo" />
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}
