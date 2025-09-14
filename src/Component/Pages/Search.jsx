import React, { useState } from "react";
import axios from "axios";
import Aside from "./aside";
import { Link } from "react-router";

const Search = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    setQuery("");
    setUsers([]);
    setError(null);
  };

  const fetchUsers = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${searchTerm}&limit=6`
      );
      if (response.data && response.data.status === "success") {
        setUsers(response.data.users);
      } else {
        setError("error");
      }
    } catch (error) {
      setError("try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm) {
      fetchUsers(searchTerm);
    } else {
      setUsers([]);
    }
  };

  return (
    <div className="">
      <Aside toggleSearch={toggleSearch} />

      {isOpen && (
        <div className="absolute w-[350px] bg-white shadow-lg rounded-lg p-4 z-10 top-17 ml-30 border border-[#DBDBDB] {isOpen ? 'block' : 'hidden'}">
          <h2 className="mb-[37px] text-[#262626] font-semibold text-[23px]">
            Search
          </h2>
          <input
            type="text"
            placeholder="search"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={query}
            onChange={handleSearch}
          />
          {loading && <div className="text-gray-500">loading....</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && users.length === 0 && query && (
            <div className="text-gray-500">user not found</div>
          )}
          <div className="space-y-2">
            {users.map((user) => (
              <Link
                key={user._id}
                to={"/login/postcard/search/userpage"} 
                className="flex items-center justify-between p-2 last:border-b-0 hover:bg-gray-100 rounded"
                onClick={toggleSearch} 
              >
                <div className="flex items-center">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="font-semibold">{user.username}</span>
                </div>
                <button className="text-red-500">
                  <img src="public/Frame (4).png" alt="" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
