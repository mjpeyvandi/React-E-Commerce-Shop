import React from "react";
import { Rating } from "../../components/home/Rating";

export const Card = ({ name, img, rate, price }) => {
  return (
    <div className="h-72 xs:h-[22rem] bg-white flex flex-col justify-start items-start gap-2 rounded-2xl cursor-pointer
     transition-all">
      <div className="w-full h-4/5 bg-gray-200 rounded-2xl overflow-hidden">
        <img
          src={img}
          alt="product"
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
      <h2 className="font-satoshi-b text-nowrap text-xs xs:text-lg sm:text-xl">{name}</h2>
      <Rating rate_Product={rate} showNumber={true} />
      <h2 className="font-satoshi-b text-xl">${price}</h2>
    </div>
  );
};
