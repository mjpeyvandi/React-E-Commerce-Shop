import React, { useEffect, useState } from "react";

import discount from "../../assets/images/discount.png";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

import { Button } from "../../ui/Button";

export const OrderSummary = ({subtotal, discountPrice}) => {
  const [discountPercentage, setPercentage] = useState(0)
  useEffect(()=>{
    const calculatePercent = ()=>{
      let percent = 0
      if(subtotal && discountPrice){
        percent += Math.floor((discountPrice / subtotal) * 100)
        setPercentage(percent)
      }
    }
    calculatePercent()
  },[discountPrice, subtotal])
  return (
    <div className="w-full h-full flex flex-col justify-between items-start">
        <div className="w-full max-h-full flex flex-col justify-center items-start gap-5">
          <h2 className="font-satoshi-b text-2xl">Order Summary</h2>

          <div className="w-full flex flex-row justify-between items-center">
            <span className="font-satoshi text-xl text-gray-500 font-light">
              Subtotal
            </span>
            <h2 className="font-satoshi-b text-xl">${subtotal}</h2>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="font-satoshi text-xl text-gray-500 font-light">
              Discount (-{discountPercentage}%)
            </span>
            <h2 className="font-satoshi-b text-xl text-rose-500">-${discountPrice}</h2>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <span className="font-satoshi text-xl text-gray-500 font-light">
              Delivery Fee
            </span>
            <h2 className="font-satoshi-b text-xl">$3</h2>
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-gray-200"></div>
        <div className="w-full max-h-full flex flex-col justify-between items-start gap-5">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="font-satoshi text-xl text-gray-900 font-light">
              Total
            </span>
            <h2 className="font-satoshi-b text-2xl">${(subtotal - discountPrice) - 3}</h2>
          </div>
          <div className="w-full grid grid-cols-7 gap-2">
            <div
              className="col-span-5 h-11 bg-gray-200 flex flex-row justify-start
     items-center align-baseline gap-2 rounded-full box-border py-2 px-3 font-satoshi-l"
            >
              <img src={discount} alt="icon" />
              <input
                type="text"
                className="h-full w-full rounded-2xl outline-none
         bg-gray-200 items-center"
                placeholder="Add promo code"
              />
            </div>
            <Button w={"col-span-2"} h={"h-11"}>
              Apply
            </Button>
          </div>
          <Button
            w={
              "w-full flex flex-row justify-center items-center gap-2 align-baseline"
            }
          >
            Go to Checkout <IoIosArrowRoundForward className="size-8" />{" "}
          </Button>
        </div>
    </div>
  );
};
