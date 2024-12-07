import { useState,useEffect } from "react"
import { FaSearch } from "react-icons/fa";

export const Search=()=>{
    const[stored,setStored] = useState({results: []});
    const[Isloading,setIsLoading] = useState(true);
    const my_id = import.meta.env.VITE_ID;
    useEffect(()=>{
       const HandleData=async()=>{
    try{
        const getdata = await fetch(`https://api.unsplash.com/search/photos?query=spring&client_id=${my_id}`);
        if(!getdata.ok){
            throw new Error("Something Problem...");
        }
        const response = await getdata.json();
        setStored(response);
    }
    catch(err){
       console.log("something went wrong....");
    }
    finally{
       setIsLoading(false)
    }
       }
       HandleData();
    },[])
    return(
        <div>
            {Isloading ?(
                <div>
                    loading.....
                </div>
            ) : (
                <div className="p-[10px]">
                <div className="p-[10px]">
                    <form className="text-center p-1">
                        <h1 className="text-4xl font-serif font-semibold mb-[10px] text-blue-800" id="shadow">Search Here:- </h1>
                        <span className="relative left-[800px] top-[30px]"><FaSearch /></span>
                        <input type="text" placeholder="Enter Here"
                        className="p-2 w-[500px] rounded-lg shadow-lg shadow-gray-600 outline-none border-2 border-gray-700"/>
                        
                    </form>
                    <div className="p-1 flex flex-wrap justify-around items-center">
                {stored.results.length>0 ?(
                   stored.results.map((item)=>(
                    <div key={item.id} className="h-[300px] w-[300px] border-2 border-slate-500 mt-[30px] p-2 rounded-xl
                    shadow-lg shadow-gray-500 hover:scale-95 duration-500 ease-in-out cursor-pointer font-serif">
                    <img src={item.urls.small} alt={item.alt_description} className="w-[300px] h-[180px] object-cover" />
                    <h1 className="text-center mt-[5px] font-semibold text-balance hover:underline">{item.slug}</h1>
                    <p className="text-pretty"><span className="font-bold text-red-700">Des: </span>{item.alt_description || "No description"}</p>
                </div>
                   ))
                ) : (
                    <div>
                        <h1>Not Found...</h1>
                    </div>
                )}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}