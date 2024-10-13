import React from "react";
import { useLocation } from "react-router-dom";

import { ProductInfo } from "../components/product/ProductInfo";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

export const Product = () => {
  const location = useLocation();
  const { id } = location.state;
  return (
    <div className="w-full h-auto bg-slate-500">
      <div className="container mx-auto w-full h-[auto] ">
        <div className="w-full h-[33rem] bg-amber-200 flex flex-col justify-between items-center">
          {/* Route section */}
          <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2 py-6 bg-green-200">
            <p className="text-gray-500">{`Home`}</p>{" "}
            <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
            <p className="text-gray-500">Products</p>
            <MdKeyboardArrowRight className="size-5 opacity-45" /> <p>Casual</p>
          </div>

          {/* product section */}
          <div className="w-full h-[95%] relative">
            <ProductInfo/>
          </div>
        </div>
      </div>
    </div>
  );
};
