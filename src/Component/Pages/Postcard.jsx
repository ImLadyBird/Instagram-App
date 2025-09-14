import Aside from "./aside";
import louisLogo from "../../images/louisLogo.svg";
import Tic from "../../images/tic.svg";
import Dots from "../../images/dots.svg";
import Louis from "../../images/louis.svg";
import Like from "../../images/like.svg";
import Comments from "../../images/comments.svg";
import Save from "../../images/save.svg";
import Emojy from "../../images/emojy.svg";
import { useEffect, useState } from "react";
import { client } from "../../Lib/idex";

export default function Postcard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTimeline();
  }, []);

  async function fetchTimeline() {
    try {
      const token = localStorage.getItem("token");
      const response = await client.get("/article/timeline", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.Articles);
      console.log(response.data.Articles);
    } catch {
      console.log("error");
      setError(true);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading timeline...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

    return (
  <div className="flex flex-row gap-40 ">
    <Aside />
    <div className="flex flex-col gap-5 py-8">
      {posts.map((post) => (
        <div key={post._id}>
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
            <img src={Save} alt="save-button" className="" />
          </div>

          <div>
            <p>741,368 likes</p>
            <p>
              <span className="font-bold">lewishamilton</span> {post.content}
            </p>
            <p className="font-bold">See translation</p>
            <p className="text-gray-400">View all 13,384 comments</p>
            <p className="font-bold">Add a comment…</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}
