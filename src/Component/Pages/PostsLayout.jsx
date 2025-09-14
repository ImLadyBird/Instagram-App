import rightimg from "../../images/postLayoutimgs/post-right.svg"
import leftimg from "../../images/postLayoutimgs/post-left1.svg"
import midimg from "../../images/postLayoutimgs/post-left1.svg"
import emptypro from "../../images/postLayoutimgs/emptyimg.svg"

export default function PostsLayout() {
  return(
    <div className="flex gap-2.5 mt-6 flex-wrap">
        <img src={rightimg} />
        <img src={midimg} />
        <img src={leftimg} />

        <img src={rightimg} />
        <img src={emptypro} />
        <img src={emptypro} />
        <img src={emptypro} />
        <img src={emptypro} />
        <img src={emptypro} />
    </div>
  )
}
