import React from "react";

import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";

export const Search = () => {
  return (
    <div className="hidden md:w-2/5 md:h-1/2  bg-gray-200 space-x-2 md:flex flex-row justify-start
     items-center rounded-full box-border p-1 font-satoshi-l">
      <IoSearchOutline className="text-gray-500 m-1" />
      <input
        type="text"
        className="h-full w-full rounded-2xl outline-none
         bg-gray-200 items-center"
         placeholder="Search for products"
      />
    </div>
  );
};
