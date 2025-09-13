import { useState } from "react";
import Aside from "./aside";
import { client } from "../../Lib/idex";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function searchFunc() {
    try {
      const response = await client.get("/user/search/${searchUser}", {
        params: { q: search },
      });
      console.log(response);
      setResults(response.data);
    } catch {
      console.error("Error fetching search");
    }
  }

  return (
    <div className="flex flex-row gap-50">
      <Aside />
      <div className="flex flex-col gap-10 w-[500px] h-[600px] bg-gray-300">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1>Search</h1>
         <div className="flex gap-5 flex-row">
             <input
            className="border-1 border-e-gray-950 rounded-md p-2"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            value={search}
          />
          <button onClick={searchFunc} className="cursor-pointer">Search</button>
         </div>
        </div>
        
      </div>
    </div>
  );
}
