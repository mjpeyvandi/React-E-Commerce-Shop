import React, { useState, useEffect } from "react";
import { Star } from "./Star";

export const Rating = ({ rate_Product, showNumber, sizeStar }) => {
  const [rate, setRating] = useState(0);

  useEffect(() => {
    // اطمینان از اینکه مقدار rate_Product عدد است
    if (typeof rate_Product === "number" && !isNaN(rate_Product)) {
      // از Math.ceil استفاده نمی‌کنیم، به دلیل نیاز به نیم ستاره
      setRating(rate_Product);
    }
  }, [rate_Product]);

  const starsFilled = Math.floor(rate); // تعداد ستاره‌های پر شده
  const hasHalfStar = rate % 1 >= 0.5;  // چک کردن نیم‌ستاره

  return (
    <div>
      <div className="flex flex-row justify-start items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          let fill = i < starsFilled;
          let halfStar = !fill && hasHalfStar && i === starsFilled;
          return (
            <Star
              fill={fill}
              key={i}
              halfStar={halfStar}
              size={sizeStar}
            />
          );
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
