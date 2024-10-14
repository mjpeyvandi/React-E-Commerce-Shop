import React from "react";

import { MultipleImage } from "./MultipleImage";
import { Order } from "./Order";

export const ProductInfo = () => {
  return (
    <div className="w-full h-full absolute flex flex-row justify-between items-start gap-8">
      <div className="w-1/2 h-full">
        <MultipleImage />
      </div>
      <div className="w-1/2 h-full">
        <Order />
      </div>
    </div>
  );
};
