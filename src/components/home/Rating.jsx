import React, { useState } from "react";

import { Star } from "./Star";

export const Rating = ({ rate_Product, showNumber, sizeStar }) => {
  // eslint-disable-next-line no-unused-vars
  const [rate, setRating] = useState(rate_Product);
  const starsFilled = Math.floor(rate);
  const hasHalfStar = rate - starsFilled > 0;
  return (
    <div>
      <div className="flex flex-row justify-start items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          let fill = i < starsFilled;
          let halfStar = !fill && hasHalfStar && i === starsFilled;
          return <Star fill={rate >= i + 1} key={i} halfStar={halfStar} size={sizeStar} />;
        })}
        {showNumber ? (
          <span className="font-satoshi-l">
            {rate}/<span className="font-satoshi-l opacity-70">5</span>
          </span>
        ) : null}
      </div>
    </div>
  );
};
