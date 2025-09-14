import { useState } from "react";
import Aside from "./Pages/aside";
import { client } from "../Lib/idex";
import { ToastContainer, toast } from 'react-toastify';
  

export default function CreatePost() {
  const notify = () => toast("Wow so easy!");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return alert("Please fill all fields!");
    }

    try {
      const token = localStorage.getItem("token");
      const response = await client.post(
        "/article",
        { title, content }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex">
      <Aside />
      <div className="flex justify-center items-center mt-16 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
        >
          <h2 className="text-center text-lg font-semibold mb-6">
            Create new post
          </h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            />
          </div>

          <button
          onClick={notify}
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Post
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
