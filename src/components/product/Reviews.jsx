import React from "react";
import { CardReview } from "./CardReview";
import { Button } from "../../components/home/Button";
export const Reviews = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-5 pt-5">
      <div className="w-full h-12 flex flex-row justify-start items-center">
        <p className="font-satoshi-b text-2xl">
          All Reviews{" "}
          <span className="font-satoshi-l text-lg text-black opacity-60">
            (451)
          </span>
        </p>
      </div>

      <div className="w-full h-auto grid grid-cols-2 gap-3">
        <CardReview
          rate={5}
          name={"jams rack"}
          comment={
            "lorem spesom lorem spesomlorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom"
          } 
          date={"Posted on August 15, 2023"}
        />
        <CardReview
          rate={5}
          name={"jams rack"}
          comment={
            "lorem spesom lorem spesomlorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom lorem spesom"
          } 
          date={"Posted on August 15, 2023"}
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center mt-3">
            <Button
              bg={"bg-white"}
              textColor={"text-black"}
              border={"border-gray-300"}
              width={"w-48"}
              height={"h-12"}
              font={"font-satoshi"}
            >
              Load More Reviews
            </Button>
          </div>
    </div>
  );
};
