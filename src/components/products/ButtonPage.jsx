import React from "react";

export const ButtonPage = ({ children, onClick }) => {
  return (
    <div>
      <button className="w-20 xs:w-24 md:w-28 h-[2.5rem] border-[0.1px] border-gray-100 bg-white rounded-lg font-satoshi
       flex flex-row justify-center items-center gap-1 text-xs xs:text-sm md:text-lg" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
