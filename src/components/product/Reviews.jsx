import React, { useEffect, useState } from "react";
import { CardReview } from "./CardReview";
import { Button } from "../../components/home/Button";

import { getReviewsProduct } from "../../services/getReviewsProduct";

export const Reviews = () => {
  const [countReview, setCountReview] = useState(6);
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getReviewsProduct(countReview);
      if (reviews) {
        setReviews(reviews);
      }
    };

    fetchReviews();
  }, [countReview]);

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
        {Reviews?.map((review) => {
          const date = new Date(review.created);
          return (
            <CardReview
              rate={review.rate}
              name={review.name}
              comment={review.comment}
              date={`Posted on ${date.toLocaleString("default", {
                month: "long",
              })} ${date.toLocaleString("default", {
                day: "2-digit",
              })}, ${date.toLocaleString("default", { year: "numeric" })}`}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-row justify-center items-center mt-3">
        <Button
          bg={"bg-white"}
          textColor={"text-black"}
          border={"border-gray-300"}
          width={"w-48"}
          height={"h-12"}
          font={"font-satoshi"}
          clickHandler={()=> setCountReview(countReview + 4)}
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};
