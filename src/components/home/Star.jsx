import React from "react";

import { MdStar } from "@react-icons/all-files/md/MdStar";
import { MdStarHalf } from "@react-icons/all-files/md/MdStarHalf";

export const Star = ({ fill, halfStar, size }) => {
  return (
    <div>
      {fill ? (
        <MdStar className={`${size ? `size-${size}` : 'size-5'}  text-star`} />
      ) : halfStar ? (
        <MdStarHalf className={`${size ? `size-${size}` : 'size-5'}  text-star`} />
      ) : (
        <MdStar className={`${size ? `size-${size}` : 'size-5'}  text-white`} />
      )}
    </div>
  );
};
