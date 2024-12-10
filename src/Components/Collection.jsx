import { useState,useEffect } from "react"
import Theme from "../Context/Mode";
import { useContext } from "react";
export const Collection=()=>{
    const {modevalue} = useContext(Theme);
    const [isLoading,setIsLoading] = useState(true);
    const [storeddata,setStoredData] = useState({results: []});
    const[querydata,setQueryData] = useState('travel');
    const [value,setValue] = useState('');
    console.log(storeddata);
    const my_Id = import.meta.env.VITE_ID;
   useEffect(()=>{
    const HandleData=async ()=>{
        try{
         const data = await fetch(`https://api.unsplash.com/search/collections?query=${querydata}&client_id=${my_Id}`);
         if(!data.ok){
            throw new Error("Something wrong....");
         }
         const response = await data.json();
         setStoredData(response);
        }
        catch(err){
          console.log(err.message);
        }
        finally{
         setIsLoading(false);
        }
    }
    HandleData();
   },[querydata])
   const HadleSearch=(e)=>{
       e.preventDefault();
       setQueryData(value);
       setValue('');
   }
    return(
        <div className={`${modevalue==='light'?'bg-amber-100':'bg-black text-white'}`} >
           {isLoading ? (
            <div>
                Loading.....
            </div>
           ) : (
            <div>
                <div className="p-[10px]">
            <form className="p-[5px] flex gap-x-4 justify-center" onSubmit={HadleSearch}>
             <input type="text" placeholder="Enter Your Search Collection Here" className="p-2 rounded-xl
             w-[400px] outline-none border-2 border-orange-600" value={value} onChange={(e)=>setValue(e.target.value)}/>
             <button type="submit" className="p-1 bg-gradient-to-br from-pink-400 to-purple-400 w-[70px]
             font-bold text-blue-900 text-xl cursor-pointer text-center">Search</button>
            </form>
         </div>
         <div className="flex justify-around flex-wrap gap-5">
          {storeddata.results.length>0 ? (
            storeddata.results.map((item)=>(
                <div id={item.id} className={`${modevalue==='light'?'border-2 border-black':'border-2 border-white'}h-auto w-[300px] p-[15px]`}>
               <h1 className="text-right font-semibold font-serif">{item.title}</h1>
               <img src={item.cover_photo.urls.small} alt="not available"
               className="h-[150px] w-full"/>
               <p className="text-center font-semibold font-serif">{item.cover_photo.description || "Amazing Image"}</p>
            </div>
            ))
          ):(
            <div>
                Not Data Available
            </div>
          )}

         </div>
            </div>
           )}
        </div>
    )
}