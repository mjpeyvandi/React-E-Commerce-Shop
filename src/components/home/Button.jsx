import React from "react";

export const Button = ({width,height,bg,textColor,border,children}) => {
  return (
    <div>
      <button className={`${width} ${height} items-center rounded-3xl ${border ? 'border-[1px]'  : ''} ${border} ${bg} ${textColor} font-satoshi`}>
        {children}
      </button>
    </div>
  );
};
