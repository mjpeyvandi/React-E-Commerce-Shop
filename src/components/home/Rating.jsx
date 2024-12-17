import React, { useState, useEffect } from "react";
import { Star } from "./Star";

export const Rating = ({ rate_Product, showNumber, sizeStar }) => {
  const [rate, setRating] = useState(0);

  useEffect(() => {
    if (typeof rate_Product === "number" && !isNaN(rate_Product)) {
      setRating(rate_Product);
    }
  }, [rate_Product]);

  const starsFilled = Math.floor(rate); // تعداد ستاره‌های پر
  const hasHalfStar = rate % 1 >= 0.5;  // چک کردن نیم‌ستاره

  return (
    <div>
      <div className="flex flex-row justify-start items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < starsFilled) {
            return <Star key={i} fill={true} size={sizeStar} />;
          } else if (i === starsFilled && hasHalfStar) {
            return <Star key={i} halfStar={true} size={sizeStar} />;
          } else {
            return <Star key={i} fill={false} size={sizeStar} />;
          }
        })}
        {showNumber ? (
          <span className="font-satoshi-l text-sm xs:text-base">
            {rate}/<span className="font-satoshi-l opacity-70 text-sm xs:text-base">5</span>
          </span>
        ) : null}
      </div>
    </div>
  );
};
