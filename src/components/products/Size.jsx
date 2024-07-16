import React from "react";

export const Size = ({value}) => {
  return (
    <div className="h-9 bg-gray-200 text-gray-500 text-sm rounded-3xl
     font-satoshi-l flex flex-row justify-center items-center p-5 cursor-pointer hover:bg-gray-300 hover:transition-all">
      <p>{value}</p>
    </div>
  );
};
