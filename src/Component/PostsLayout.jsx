import rightimg from "../images/postLayoutimgs/post-right.svg"
import leftimg from "../images/postLayoutimgs/post-middel.svg"
import midimg from "../images/postLayoutimgs/post-left1.svg"

export default function PostsLayout() {
  return(
    <div className=" ">
        <img src={rightimg} />
        <img src={midimg} />
        <img src={leftimg} />
        
    </div>
  )
}
