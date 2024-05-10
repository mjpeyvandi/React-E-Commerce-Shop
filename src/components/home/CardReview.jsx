import React from "react";
import { Rating } from "./Rating";

import { IoIosCheckmarkCircle } from "@react-icons/all-files/io/IoIosCheckmarkCircle";

export const CardReview = ({rate, name, comment}) => {
  return (
    <div className="h-full w-1/3 bg-white rounded-3xl border-[1.5px] border-gray-300 px-[32px] py-[28px]">
      <div className="w-full h-full flex flex-col justify-start items-start gap-3">
        <Rating rate_Product={rate} showNumber={false} />
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <p className="font-satoshi-b text-xl">{name}</p>
          <IoIosCheckmarkCircle className="text-green-600 size-6" />
        </div>
        <p className="font-satoshi text-black opacity-60">
          {comment}
        </p>
      </div>
    </div>
  );
};
