import { useState } from "react";
import { FcLike } from "react-icons/fc"; 
import { GoHeart } from "react-icons/go"; 

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() => setLiked(!liked)}
      className="cursor-pointer transition-transform hover:scale-110"
    >
      {liked ? <FcLike size={28} /> : <GoHeart size={28} />}
    </div>
  );
}
