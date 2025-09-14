import { useState } from "react";
import Aside from "./Pages/aside";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, file });
  };

  return (
    <div className="flex" >
        <Aside/>
        
    <div className="flex justify-center items-center min-h-screen w-10/12 w-full">
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
            className="w-full  rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full  rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />
        </div>

        <div className="mb-6">
          <label className="w-full flex justify-center items-center cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <span className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2.5 rounded-[40px] transition">
              Select from computer
            </span>
          </label>
          {file && (
            <p className="text-sm text-gray-500 mt-2">Selected: {file.name}</p>
          )}
        </div>

        {/* <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          Post
        </button> */}
      </form>
    </div>
    </div>
  );
}
