import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Search = () => {
  const [stored, setStored] = useState({ results: [] });
  const [querydata,setQueryData] = useState('mountain');
  const [value,setValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const my_id = import.meta.env.VITE_ID;

  useEffect(() => {
    const handleData = async () => {
      try {
        const getData = await fetch(
          `https://api.unsplash.com/search/photos?query=${querydata}&client_id=${my_id}`
        );
        if (!getData.ok) {
          throw new Error("Something went wrong...");
        }
        const response = await getData.json();
        setStored(response);
      } catch (err) {
        console.log("Something went wrong....");
      } finally {
        setIsLoading(false);
      }
    };
    handleData();
  }, [querydata]);

   const HandleSearch=(e)=>{
    e.preventDefault();
    setQueryData(value);
    setValue('');
   }
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-[10px]">
          <div className="p-[10px]">
            <form className="text-center p-1" onSubmit={HandleSearch}>
              <h1 className="text-4xl font-serif font-semibold mb-[10px] text-blue-800" id="shadow">
                Search Here:
              </h1>
              <div className="absolute left-[790px] top-[150px]">
              <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Enter Here" value={value} onChange={(e)=>setValue(e.target.value)}
                className="p-2 w-[500px] rounded-lg shadow-lg shadow-gray-600 outline-none border-2 border-gray-700"
              />
              <button type="submit" className="ml-5 bg-gradient-to-tl from-gray-400 to-amber-100 p-2 rounded-lg
              font-serif font-semibold hover:scale-110 duration-500">Search</button>
            </form>
            {stored.results.length === 0 ? (
              <div className="text-center mt-10">
                <h2 className="text-xl font-semibold text-gray-500">
                  No results found. Try searching for something else!
                </h2>
              </div>
            ) : (
              <div className="p-1 flex flex-wrap justify-around items-center">
                {stored.results.map((item) => (
                  <div
                    key={item.id}
                    className="h-[300px] w-[300px] border-2 border-slate-500 mt-[30px] p-2 rounded-xl shadow-lg shadow-gray-500 hover:scale-95 duration-500 ease-in-out cursor-pointer font-serif"
                  >
                    <Link to={`/detail/${item.id}`}><img
                      src={item.urls.small}
                      alt={item.alt_description || "Image from Unsplash"}
                      className="w-[300px] h-[180px] object-cover" 
                    /></Link>
                    <h1 className="text-center mt-[5px] font-semibold text-black hover:underline">
                      {item.user.username}
                    </h1>
                    <p className="text-gray-600">
                      <span className="font-bold text-red-700">Des: </span>
                      {item.alt_description || "No description"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
