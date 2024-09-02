import React from "react";

export const Button = ({children, clickable = true, onClick}) => {
  return (
    <div>
      <button
        className={`size-12 bg-white focus:bg-gray-200 rounded-lg font-satoshi
       flex flex-row justify-center items-center cursor-pointer ${clickable ? 'hover:bg-gray-100' : 'cursor-default'}`}
       disabled={!clickable}
       onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
