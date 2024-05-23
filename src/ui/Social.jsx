import React from "react";
import { Link } from "react-router-dom";


export const Social = ({ link, children }) => {
  return (
    <div className="size-7 bg-white rounded-full border-[1px] border-gray-300 flex flex-row justify-center items-center">
      <Link to={link} className="size-full flex flex-row justify-center items-center">
        {children}
      </Link>
    </div>
  );
};
