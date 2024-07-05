import React from "react";

import filters from "../../assets/images/filters.png";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import  PriceRange  from "./PriceRange";

export const FilterSection = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-white border-[0.2px] border-gray-300 p-4 flex flex-col justify-start items-center align-baseline gap-5">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="font-satoshi-b text-xl">Filters</h2>
        <img src={filters} alt="" />
      </div>

      {/* category */}
      <div className="w-full border-y-[0.2px] border-gray-300">
        <ul className="w-full flex flex-col justify-between items-start py-4 gap-3">
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            T-shirts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Shorts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Shirts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Hoddie
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Jeans
          </li>
        </ul>
      </div>

      {/* price */}
      <div className="w-full flex flex-col justify-start items-center align-baseline gap-7">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="font-satoshi-b text-xl">Price</h2>
          <IoIosArrowUp />
        </div>
        <PriceRange/>
      </div>
    </div>
  );
};
