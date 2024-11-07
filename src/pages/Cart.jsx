import React from "react";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

export const Cart = () => {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto w-full h-auto border-t-[0.2px] border-t-gray-300">
        {/* route section */}
        <div className="w-full h-[48px] flex flex-row justify-start items-center font-satoshi-l gap-2 py-6">
          <p className="text-gray-500">{`Home`}</p>{" "}
          <MdKeyboardArrowRight className="size-5 opacity-45" /> <p>Order</p>
        </div>
        {/* titr section */}
        <div className="w-full h-auto py-4">
          <h2 className="font-titr text-4xl h-1/6">Your cart</h2>
        </div>
        {/* cart section */}
        <div className="w-full h-auto grid grid-cols-5 gap-3 items-start">
          <div className="w-full h-min col-span-3 bg-slate-400 border-[0.2px] border-gray-300 rounded-2xl p-6">
            <div className="h-36 bg-slate-300"></div>
          </div>
          <div className="w-full min-h-96 relative col-span-2 bg-orange-300 border-[0.2px] border-gray-300 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
