import React, { useEffect, useRef, useState } from "react";

import { ModalSearch } from "./ModalSearch";
import { getProductSearched } from "../services/getProductSearched";

import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

export const Search = ({mobile, close}) => {
  const [Search, setSearch] = useState("");
  const [Results, setResults] = useState([]);
  const [Loading, setLoading] = useState(false);

  const InputRef = useRef(null)

  useEffect(()=>{
    if(mobile && InputRef.current){

      setTimeout(() => {
        InputRef.current.focus();
      }, 1000);
      
    }
  },[mobile])

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
    <div className={`relative ${mobile ? 'max-h-14 w-full rounded-none gap-0' : ''} w-full h-full md:flex flex-col justify-center items-center gap-4 flex-nowrap box-border `}>
      <div className={`w-full h-full flex justify-between items-center align-baseline bg-gray-200 ${mobile ? 'rounded-t-2xl border-b-[0.1px] border-black sticky max-h-14 top-0 left-0 z-50' : 'rounded-full'}  box-border px-3 py-1`}>
        <div
          className={`w-11/12 h-full bg-gray-200 space-x-1 flex flex-row justify-start
     items-center font-satoshi-l`}
        >
          <IoSearchOutline className="text-gray-500 m-1" />
          <input
            type="text"
            className="h-full w-full outline-none
         bg-gray-200 items-center font-satoshi tracking-wider focus: "
            placeholder="Search for products"
            value={Search}
            onChange={(event) => setSearch(event.target.value)}
            ref={InputRef}
          />
        </div>
        <div className="h-full w-2/12 flex justify-end items-center">
        {
          window.screen.width > 768 ? 
          <IoCloseOutline
            className={`${
              !Search ? "hidden" : ""
            }
            text-gray-500 m-1 hover:cursor-pointer`}
            onClick={() => setSearch("")}
          />
          :
          <IoCloseOutline
            className={`
            text-gray-500 m-1 size-6 h-full hover:cursor-pointer`}
            onClick={close}
          />
        }
          
          
        </div>
      </div>
      {Search.length ? (
        <ModalSearch
          items={Results.length > 15 ? Results.slice(0, 15) : Results}
          loading={Loading}
          length={Results.length}
          allItems={Results}
          mobile={mobile}
          close={close}
        />
      ) : null}
    </div>
  );
};
