import React from "react";

export const Button = ({width,height,bg,textColor,border,font,clickHandler,children}) => {
  return (
    <div className={`${width} ${height}`}>
      <button className={`h-full w-full items-center rounded-full ${border ? 'border-[1px]'  : ''} ${border} ${bg} ${textColor} ${font}`} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
};
