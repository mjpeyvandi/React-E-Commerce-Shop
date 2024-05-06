import React from "react";

export const Button = ({bg,textColor,border,children}) => {
  return (
    <div>
      <button className={`items-center rounded-3xl ${border ? 'border-[1.5px]' : ''} ${bg} ${textColor} w-48 h-12 font-satoshi`}>
        {children}
      </button>
    </div>
  );
};
