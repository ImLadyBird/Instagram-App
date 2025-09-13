import Aside from "./aside";
import louisLogo from "../../images/louisLogo.svg";
import Tic from "../../images/tic.svg";
import Dots from "../../images/dots.svg";
import Louis from "../../images/louis.svg";
import Like from "../../images/like.svg";
import Comments from "../../images/comments.svg";
import Save from "../../images/save.svg";
import Emojy from "../../images/emojy.svg"

export default function Postcard() {
  return (
    <div className="flex flex-row gap-40 ">
      <Aside />
      <div className="flex flex-col gap-5 py-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center justify-center">
            <img src={louisLogo} alt="image" />
            <p>lewishamilton</p>
            <img src={Tic} alt="" />
            <p>5h</p>
          </div>
          <img src={Dots} alt="" />
        </div>
        <img src={Louis} className="w-[500px]" />
       <div className="flex flex-row justify-between">
         <div className="flex flex-row gap-3">
          <img src={Like} alt="like-button" />
          <img src={Comments} alt="comment-button" />
        </div>
        <img src={Save} alt="save-button" className=""/>
       </div>
       <div>
        <p>741,368 likes</p>
        <p><span className="font-bold">lewishamilton</span>Parabéns Ayrton, minha inspiração sempre 🇧🇷💫</p>
        <p className="font-bold">See translation</p>
        <p className="text-gray-400">View all 13,384 comments</p>
        <p className="font-bold">Add a comment…</p>
       </div>
       
      </div>
    </div>
  );
}
