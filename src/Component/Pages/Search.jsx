import { useEffect, useState } from "react";
import Aside from "./aside";
import { client } from "../../Lib/idex";
import Loadingimg from "../../images/loading.svg"

export default function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    SearchFunc();
  }, [searchQuery]);

  async function SearchFunc() {
    if (!searchQuery) return;
    try {
      setLoading(true);
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vbWVuaTEyMyIsInJvbGUiOiJ1c2VyIiwiX2lkIjoiNjhjNjU1MjQ3Mzc4YzMwYjRiZjQxMDJiIiwiaWF0IjoxNzU3ODI4NDAzLCJleHAiOjE3NTc4NDg0MDN9.2Ebu91i73OZ2iHTm0br70ENTG6Uwrgm6ALruCzzXc6c";
      const response = await client.get(`/user/u/${searchQuery}`,
        {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      const data = response;
      setProducts(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-row gap-50">
      <Aside className="relative" />
      <div className="flex flex-col gap-10 w-[500px] h-[600px] absolute bg-gray-50 left-30 top-17 rounded-[10px] border-1">
        <div className="flex flex-col gap-5 justify-start items-left pt-4 pl-5">
          <h1 className="text-2xl font-bold">Search</h1>
          <div className="flex gap-5 flex-row">
            <input
              className="border-1 border-e-gray-950 rounded-md p-2"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
        {loading ? (
            <div className="flex justify-center items-center">
                <img src={Loadingimg} alt="loading" className="w-[50px] " />
            </div>
          
        ) : (
          <div>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-row gap-5 justify-start items-center"
              >
                <img
                  src={product.image}
                  alt="product"
                  className="w-[100px] h-[100px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold">{product.name}</p>
                  <p className="text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
