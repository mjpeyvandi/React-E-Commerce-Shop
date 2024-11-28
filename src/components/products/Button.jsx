import React from "react";

export const Button = ({children, clickable = true, onClick, checked}) => {
  return (
    <div>
      <button
        className={`size-6 sm:size-12 ${checked ? 'bg-gray-200' : 'bg-white'} focus:bg-gray-200 rounded-lg font-satoshi text-sm sm:text-lg
       flex flex-row justify-center items-center cursor-pointer outline-none ${clickable ? 'hover:bg-gray-100' : 'cursor-default'} transition-all `}
       disabled={!clickable}
       onClick={onClick}
        value={children}
      >
        {children}
      </button>
    </div>
  );
};
