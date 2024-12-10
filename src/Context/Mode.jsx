import { useState} from "react"
import { createContext } from "react"

const Theme = createContext();
export const Mode=({children})=>{
    const[modevalue,setModeValue] = useState(()=>{
        const data = localStorage.getItem('theme');
        return data? data: 'light';
    })
    const HandleMode=()=>{
        setModeValue((prev)=>{
            const newdata = prev==='light'?'dark':'light';
            localStorage.setItem('theme',newdata);
            return newdata;
        })
       }
    return(
        <Theme.Provider value={{HandleMode,modevalue}}>
            {children}
        </Theme.Provider>
    )
}
export default Theme;