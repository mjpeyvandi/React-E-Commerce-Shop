import React from "react";
import { Rating } from "../../components/home/Rating";

export const SkeltonCard = () => {
  return (
    <div
      className="h-72 xs:h-[22rem] bg-white flex flex-col justify-start items-start gap-2 rounded-2xl cursor-pointer
     transition-all"
    >
      <div
        className={`w-full h-4/5 animate-pulse bg-gray-300 rounded-2xl overflow-hidden`}
      ></div>
      <div className="w-full h-6 animate-pulse bg-gray-300 rounded-2xl"></div>
      <div className="w-full h-4 flex flex-row justify-start items-center gap-4">
        <div className="w-1/4 h-2 animate-pulse bg-gray-300 rounded-2xl"></div>
        <div className="w-1/6 h-2 animate-pulse bg-gray-300 rounded-2xl"></div>
      </div>
      <div className="w-1/4 h-4 animate-pulse bg-gray-300 rounded-2xl"></div>
    </div>
  );
};
