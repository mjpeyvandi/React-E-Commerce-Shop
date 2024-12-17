import React from "react";

import { MdStar } from "@react-icons/all-files/md/MdStar";
import { MdStarHalf } from "@react-icons/all-files/md/MdStarHalf";

export const Star = ({ fill, halfStar, size }) => {
  return (
    <div>
      {fill ? (
        <MdStar className={`${size ? `size-${size}` : 'size-5'}  text-star drop-shadow-[0_0_2px_rgb(255,198,51)]`} />
      ) : halfStar ? (
        <MdStarHalf className={`${size ? `size-${size}` : 'size-5'}  text-star drop-shadow-[0_0_2px_rgb(255,198,51)]`} />
      ) : (
        <MdStar className={`${size ? `size-${size}` : 'size-5'}  text-white drop-shadow-[0_0_2px_rgb(255,198,51)]`} />
      )}
    </div>
  );
};
