import React from "react";

import { MultipleImage } from "./MultipleImage";
import { Order } from "./Order";

export const ProductInfo = () => {
  return (
    <div className="w-full h-full absolute flex flex-col lg:flex-row justify-between items-start gap-8">
      <div className="w-full h-2/4 sm:h-1/2 lg:w-1/2 lg:h-full">
        <MultipleImage />
      </div>
      <div className="w-full h-2/4 sm:1/2 lg:w-1/2 lg:h-full">
        <Order />
      </div>
    </div>
  );
};
