import React, { useState } from "react";
import { Reviews } from "./Reviews";

export const TypeInfo = () => {
    const [selectedTypeInfo, setSelectedType] = useState("reviews")
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center pt-10 sm:pt-14">
      <div className="w-full h-16 flex flex-row justify-between items-center border-b-[0.2px] border-gray-300 gap-5 xs:gap-0">
        <button className={`w-1/3 h-full font-satoshi text-black opacity-60 text-base text-nowrap xs:text-lg sm:text-xl text-center ${selectedTypeInfo === "detail" ? `border-b-[px] border-black font-satoshi-b opacity-100` : ``}`} onClick={()=> setSelectedType("detail")}>Product Details</button>
        <button className={`w-1/3 h-full font-satoshi text-black opacity-60 text-base text-nowrap xs:text-lg sm:text-xl text-center ${selectedTypeInfo === "reviews" ? `border-b-[0.8px] border-black font-satoshi-b opacity-100` : ``}`} onClick={()=> setSelectedType("reviews")}>Rating & Reviews</button>
        <button className={`w-1/3 h-full font-satoshi text-black opacity-60 text-base text-nowrap xs:text-lg sm:text-xl text-center ${selectedTypeInfo === "faq" ? `border-b-[0.8px] border-black font-satoshi-b opacity-100` : ``}`} onClick={()=> setSelectedType("faq")}>FAQs</button>
      </div>

      {
        selectedTypeInfo === "reviews" ?
        <Reviews/>
        :
        null
      }  

    </div>
  );
};
