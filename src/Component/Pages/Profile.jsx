import instaFont from "../../images/icon/instaText.svg";
import Home from "../../images/icon/Home.svg";
import Search from "../../images/icon/Search.svg";
import Save from "../../images/icon/Save.svg";
import Profilee from "../../images/icon/Profile.svg";
import BigProfile from "../../images/icon/bigProfile.svg";

export default function Profile() {
  return (
    <div>
      <div>
        <img src={instaFont} alt="text" />
        <ul>
          <li>
            <img src={Home} alt="homeIcon" />
            <p>Home</p>
          </li>
          <li>
            <img src={Search} alt="Search" />
            <p>Search</p>
          </li>
          <li>
            <img src={Save} alt="Save" />
            <p>Save </p>
          </li>
          <li>
            <img src={Profilee} alt="Profile" />
            <p>Profile</p>
          </li>
        </ul>
      </div>

      <div>
        <div>
            <img src={BigProfile} alt="BigProfile" />
            
        </div>
      </div>
    </div>
  );
}
