import React from "react";

export const Size = ({ value, onClick, sizes }) => {
  return (
    <div
      className={`h-9 bg-gray-200 text-gray-700 text-sm rounded-3xl
     font-satoshi-l flex flex-row justify-center items-center p-5 cursor-pointer
      hover:bg-gray-100 hover:transition-all ${sizes?.includes(value) ? `bg-gray-400 text-white` : ``}`}
      onClick={onClick}
    >
      <p>{value}</p>
    </div>
  );
};
