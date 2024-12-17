import React from "react";

export const Size = ({ value, onClick, sizes, disabled, checked}) => {
  return (
    <div
      className={`h-9 bg-gray-200 text-gray-700 text-sm rounded-3xl
     font-satoshi-l flex flex-row justify-center items-center p-5 cursor-pointer
       hover:transition-all ${
        sizes?.includes(value) ? ` bg-gray-300 text-black border-gray-500 border-[1.5px]` : ``
      } ${!disabled ? `opacity-60 pointer-events-none` : ``} ${checked ? `border-gray-950 border-[2.5px]` : ``}`}
      onClick={onClick}
    >
      <p className={`${!disabled ? `line-through` : ``}`}>{value}</p>
    </div>
  );
};
