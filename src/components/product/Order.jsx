import React from "react";

import { Rating } from "../home/Rating";
import Color from "../products/Color";
import { Size } from "../products/Size";

export const Order = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      {/* details */}
      <div className="w-full h-[45%]  flex flex-col justify-between items-start gap-3 pb-3">
        <h1 className="font-titr text-4xl uppercase">
          one life graphic t-shirt
        </h1>
        <Rating rate_Product={4} showNumber={true} sizeStar={7} />
        <div className="w-full h-[36px] flex flex-row justify-start items-center gap-2">
          <span className="font-satoshi-b text-3xl">$260</span>
          <span className="font-satoshi-b text-gray-400 text-3xl line-through">
            $300
          </span>
          <span className="w-auto h-full p-2 flex flex-row justify-center items-center px-3 font-satoshi text-sm bg-red-100 text-red-500 rounded-3xl">
            -40%
          </span>
        </div>
        <p className="w-4/5 font-satoshi text-black opacity-60">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      {/* color */}
      <div className="w-full h-[20%]  flex flex-col justify-center gap-2 items-start border-y-[0.2px] border-y-gray-300">
        <span className="font-satoshi text-black opacity-60">
          Select Colors
        </span>
        <div className="w-auto flex flex-row justify-start items-center gap-2">
          <Color value={"sky"} />
          <Color value={"green"} />
          <Color value={"black"} />
        </div>
      </div>
      {/* size */}
      <div className="w-full h-[20%]  flex flex-col justify-center gap-2 items-start border-b-[0.2px] border-b-gray-300">
        <span className="font-satoshi text-black opacity-60">Select Size</span>
        <div className="w-auto h-auto flex flex-row justify-start items-center gap-2">
          <Size value={"Small"} />
          <Size value={"Medium"} />
          <Size value={"Large"} />
          <Size value={"X-Large"} />
        </div>
      </div>
      {/* add to cart */}
      <div className="w-full h-[15%] flex flex-row justify-between items-end gap-4">
        <div className="w-1/4 h-12 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
          <button className="w-auto h-full text-center text-4xl font-satoshi">
            -
          </button>
          <span className="w-auto h-auto text-2xl font-satoshi">1</span>
          <button className="w-auto h-full text-center text-4xl font-satoshi">
            +
          </button>
        </div>
        <button className="w-3/4 h-12 rounded-3xl bg-black font-satoshi text-center text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
