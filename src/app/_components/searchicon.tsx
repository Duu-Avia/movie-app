"use client";
import { Input } from "@/components/ui/input";
import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

export function SearchIcon() {
  return (
    <>
      <button
        onClick={() => {}}
        className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md"
      >
        <CiSearch className=" size-[16px] text-[#18181B]" />
      </button>
    </>
  );
}
