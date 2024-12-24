"use cleint"
import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { SearchIcon } from "./searchicon";
import { DarkMode } from "./darkmode";
import { useState } from "react";


export function NavigatorActive({isActive, setIsActive}) {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex text-indigo-700 gap-[8px]  py-[19.5px] pl-[20px]">
          <FiFilm className="size-[20px]  text-indigo-700" />
          <div className="italic text-[16px] ">Movie Z</div>
        </div>
        <div className="flex py-[19.5px] pr-[20px] gap-[12px]">
        <button
        onClick={()=>{
            
        }}
        className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md">
        <CiSearch className=" size-[16px] text-[#18181B]" />
      </button>
      <button className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md">
        <PiMoonLight className=" size-[16px] text-[#18181B]" />
      </button>
        </div>
      </header>
    </>
  );
}