"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { SearchList } from "./SearchList";

export type SearchValueType = string

export const SearchMain = () => {
  const [searchValue, setSearchValue] = useState<SearchValueType>("");

  const handleChanger = (e:ChangeEvent<HTMLInputElement>):void => {
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
