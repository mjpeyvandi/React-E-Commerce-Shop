import React from "react";
import { Link } from "react-router-dom";

export const CardStyle = ({ span, image, text, scale, clickHandler }) => {
  return (
    <div className={` ${span} bg-white overflow-hidden rounded-3xl relative cursor-pointer`} onClick={clickHandler}>
      
        <img
          src={image}
          alt="style"
          className={`w-full h-full object-cover object-center transform ml-8 ${scale}`}
        />
        <p className="font-satoshi-b text-4xl top-0 left-0 ml-5 mt-5 absolute ">
          {text}
        </p>
    </div>
  );
};
