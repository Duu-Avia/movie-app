"use client";
import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { SearchIcon } from "./searchicon";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChevronDownOutline } from "react-icons/io5";
import { FilteredGenre } from "./FilteredGenre";
import { SearchMain } from "./SearchMain";

type HandleChangerType = () => void
type HandleChangerProps = {
  handleChanger: HandleChangerType
}

export function Navigator() {
  const [isActive, setIsActive] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const handleChanger:HandleChangerType = () => {
    setIsActive(!isActive);
  };

  const darkModeToggle = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
    if (isClicked) {
      setWhiteMode();
    } else {
      setDarkMode();
    }
  };

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };
  const setWhiteMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "white");
  };

  return (
    <header className="flex justify-between items-center">
      {!isActive ? (
        <NavigatorActive handleChanger={handleChanger} />
      ) : (
        <>
          <Link href="/">
            <div className="flex text-indigo-700 gap-[8px]  py-[19.5px] pl-[20px]">
              <FiFilm className="size-[20px]  text-indigo-700" />
              <div className="italic text-[16px] ">Movie Z</div>
            </div>
          </Link>

          <div className="flex py-[19.5px] pr-[20px] gap-[12px]">
            <button
              onClick={handleChanger}
              className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md md:hidden"
            >
              <CiSearch className=" size-[16px] text-[#18181B]" />
            </button>
            <button
              onClick={darkModeToggle}
              className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md"
            >
              <PiMoonLight className=" size-[16px] text-[#18181B]" />
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export function NavigatorActive({ handleChanger }:HandleChangerProps) {
  return (
    <>
      <header className="flex justify-center items-center pt-[15px] pb-[35px]">
        <div className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md">
          <Popover>
            <PopoverTrigger>
              <IoChevronDownOutline />
            </PopoverTrigger>
            <PopoverContent>
              <FilteredGenre />
            </PopoverContent>
          </Popover>
        </div>

        <SearchMain />
        <button className="md:hidden" onClick={handleChanger}>
          X
        </button>
      </header>
    </>
  );
}
