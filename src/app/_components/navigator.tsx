import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { SearchIcon } from "./searchicon";
import { DarkMode } from "./darkmode";

export function Navigator() {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex text-indigo-700 gap-[8px]  py-[19.5px] pl-[20px]">
          <FiFilm className="size-[20px]  text-indigo-700" />
          <div className="italic text-[16px] ">Movie Z</div>
        </div>
        <div className="flex py-[19.5px] pr-[20px] gap-[12px]">
          <SearchIcon />
          <DarkMode />
        </div>
      </header>
    </>
  );
}
