import React from "react";

import trash from "../../assets/images/trash.png";
import { useDispatch } from "react-redux";
import { Decrease, deleteItem, Increase } from "../../states/cartSlice";

export const Items = ({
  id,
  image,
  name,
  realPrice,
  quantity,
  size,
  color,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="h-36 w-full flex flex-row justify-between items-center">
      {/* item details */}
      <div className="w-auto h-full flex flex-row justify-start items-center gap-4">
        <img
          src={image}
          alt="defe"
          className="h-full w-36 object-cover rounded-2xl bg-gray-200"
        />
        <div className="h-full w-auto flex flex-col justify-between items-start">
          <div className="h-4/5 w-auto flex flex-col justify-start items-start gap-1">
            <h2 className="font-satoshi-b text-xl">{name}</h2>
            <p className="font-satoshi text-sm ">
              Size:{" "}
              <span className="font-satoshi text-sm text-gray-400 font-light">
                {size}
              </span>
            </p>
            <p className="font-satoshi text-sm ">
              Color:{" "}
              <span className="font-satoshi text-sm text-gray-400 font-light">
                {color}
              </span>
            </p>
          </div>
          <h2 className="font-satoshi-b text-2xl">${quantity * realPrice}</h2>
        </div>
      </div>
      {/* manage item */}
      <div className="w-auto h-full flex flex-col justify-between items-end">
        <img
          src={trash}
          alt="dd"
          className="cursor-pointer"
          onClick={() =>
            dispatch(deleteItem({ productID: id, size: size, color: color }))
          }
        />
        <div className="w-36 h-11 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
            onClick={() =>
              dispatch(Decrease({ productID: id, size: size, color: color }))
            }
          >
            -
          </button>
          <span className="w-auto h-auto text-2xl font-satoshi">
            {quantity}
          </span>
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
            onClick={() =>
              dispatch(Increase({ productID: id, size: size, color: color }))
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
