import React, { useEffect, useState } from "react";

import { ModalSearch } from "./ModalSearch";
import { getProductSearched } from "../services/getProductSearched";

import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

export const Search = () => {
  const [Search, setSearch] = useState("");
  const [Results, setResults] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const findProducts = async () => {
      if (Search.trim() === "") {
        return setResults([]);
      }
      setLoading(true);
      const result = await getProductSearched(Search);
      setResults(result || []);
      setLoading(false);
    };
    findProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Search]);
  return (
    <div className="relative hidden lg:w-2/5 md:w-3/5 md:h-1/2 md:flex flex-col justify-center items-center gap-4 flex-nowrap rounded-full box-border">
      <div className="w-full h-full flex justify-between items-center align-baseline bg-gray-200 rounded-full box-border px-3 py-1">
        <div
          className="w-11/12 h-full bg-gray-200 space-x-1 md:flex flex-row justify-start
     items-center font-satoshi-l"
        >
          <IoSearchOutline className="text-gray-500 m-1" />
          <input
            type="text"
            className="h-full w-full outline-none
         bg-gray-200 items-center font-satoshi tracking-wider"
            placeholder="Search for products"
            value={Search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="h-full w-1/12 flex justify-end items-center">
          <IoCloseOutline
            className={`${
              !Search ? "hidden" : ""
            } text-gray-500 m-1 hover:cursor-pointer`}
            onClick={() => setSearch("")}
          />
        </div>
      </div>
      {Search.length ? (
        <ModalSearch
          items={Results.length > 15 ? Results.slice(0, 15) : Results}
          loading={Loading}
          length={Results.length}
          allItems={Results}
        />
      ) : null}
    </div>
  );
};
