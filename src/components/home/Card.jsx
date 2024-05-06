import React from "react";
import { Rating } from "./Rating";

export const Card = ({ name, img, rate, price }) => {
  return (
    <div className="h-full bg-white flex flex-col justify-start items-start gap-2">
      <div className="w-full h-72 bg-gray-200 rounded-2xl overflow-hidden">
        <img
          src={img}
          alt="product"
          className="w-full h-full object-contain object-center rounded-2xl"
        />
      </div>
      <h2 className="font-satoshi-b text-xl">{name}</h2>
      <Rating rate_Product={rate} />
      <h2 className="font-satoshi-b text-xl">${price}</h2>
    </div>
  );
};
