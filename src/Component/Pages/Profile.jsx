import instaFont from "../../images/icon/instaText.svg";
import Home from "../../images/icon/Home.svg";
import Search from "../../images/icon/Search.svg";
import Save from "../../images/icon/Save.svg";
import Profilee from "../../images/icon/Profile.svg";
import BigProfile from "../../images/icon/bigProfile.svg";
import Aside from "./aside";
import HeaderInsta from "../headerinsta";
import PostsLayout from "../PostsLayout";

export default function Profile() {
  return (
    <div className="flex justify-between">
      <Aside />
      <div className="max-w-9/12">
        <HeaderInsta />
        <PostsLayout />
      </div>
    </div>
  );
}
