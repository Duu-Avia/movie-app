"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SearchList } from "./SearchList";

export const SearchMain = ({searchValue, setSearchValue, onInputChange}) => {
 

  const handleChanger = (e) => {
   
    onInputChange(e.target.value)
  
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
