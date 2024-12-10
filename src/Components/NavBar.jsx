import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { TbCashRegister } from "react-icons/tb";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaSun } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useContext } from "react";
import Theme from "../Context/Mode"; 
// Import your GIF
import soloTravellerGif from "../assets/solo-traveller.gif"; // Adjust the path based on your folder structure


export const NavBar = () => {
  const {HandleMode,modevalue} = useContext(Theme)
  return (
    <div className={`${modevalue === 'light' ? 'bg-amber-200' : 'bg-black text-white'} p-[10px] box-border`}>
      <div className="flex justify-around items-center ">
        {/* Display the GIF in the header */}
        <h1 className="font-serif font-semibold cursor-pointer flex items-center gap-x-2">
          <img src={soloTravellerGif} alt="Logo" className="w-10 h-10 rounded-full" /> {/* Adjust width/height as needed */}
          PicFusion
        </h1>

        <ul className="flex gap-x-5 font-serif font-semibold items-center">
          <li className="cursor-pointer">
            <Link to={"/"}>
              <FaHome className="inline-flex text-lg" />
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/search"}>
              <FaSearch className="inline-flex text-lg" />
              Search
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/collect"}>
              <MdCollections className="inline-flex text-lg" />
              Collection
            </Link>
          </li>
        </ul>

        <ul className="flex gap-x-5 font-serif font-semibold items-center">
          <li className="cursor-pointer">
            <Link to={"/signup"}>
              <TbCashRegister className="inline-flex text-lg" />
              Register
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/signin"}>
              <RiLoginBoxFill className="inline-flex text-lg" />
              Login
            </Link>
          </li>
          <li className="cursor-pointer">
           <button type="button" onClick={HandleMode}>{modevalue === 'light' ? <FaSun className="inline-flex text-lg" /> : "🌙"}</button>
          </li>
          <li className="cursor-pointer">
            <Link to={"/addcart"}>
              <FaSave className="inline-flex text-lg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
