"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SearchList } from "./SearchList";

export const SearchMain = ({}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChanger = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <Input onChange={handleChanger} />
        {searchValue && <SearchList searchValue={searchValue} />}
      </div>
    </>
  );
};
