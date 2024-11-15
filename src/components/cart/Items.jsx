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
    <div className="h-28 sm:h-36 w-full flex flex-row justify-between items-center ">
      {/* item details */}
      <div className="w-full xs:w-auto h-full flex flex-row justify-start items-center sm:gap-4 gap-2">
        <div className="h-full w-32 xs:w-24 sm:w-36">
          <img
            src={image}
            alt="defe"
            className="w-full h-full object-cover rounded-2xl bg-gray-200"
          />
        </div>

        <div className="h-full w-full xs:w-auto flex flex-col justify-between items-start">
          <div className="h-4/5 w-full xs:w-auto flex flex-col justify-start items-start gap-1">
            <div className="w-full h-auto flex flex-row justify-between items-center gap-1">
              <h2 className="w-full font-satoshi-b text-sm sm:text-xl text-nowrap">
                {name}
              </h2>
              <img
                src={trash}
                alt="dd"
                className="xs:hidden w-3 xs:w-full block cursor-pointer"
                onClick={() =>
                  dispatch(
                    deleteItem({ productID: id, size: size, color: color })
                  )
                }
              />
            </div>

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
          <div className="w-full h-auto flex flex-row justify-between items-center gap-1">
            <h2 className="font-satoshi-b text-xl sm:text-2xl">
              ${quantity * realPrice}
            </h2>
            <div className="xs:hidden w-28 h-9 sm:w-36 sm:h-11 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
              <button
                className="w-auto h-full text-center text-2xl sm:text-4xl font-satoshi outline-none"
                onClick={() =>
                  dispatch(
                    Decrease({ productID: id, size: size, color: color })
                  )
                }
              >
                -
              </button>
              <span className="w-auto h-auto text-xl sm:text-2xl font-satoshi">
                {quantity}
              </span>
              <button
                className="w-auto h-full text-center text-2xl sm:text-4xl font-satoshi outline-none"
                onClick={() =>
                  dispatch(
                    Increase({ productID: id, size: size, color: color })
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* manage item */}
      <div className="hidden w-auto h-full xs:flex flex-col justify-between items-end">
        <img
          src={trash}
          alt="dd"
          className="cursor-pointer"
          onClick={() =>
            dispatch(deleteItem({ productID: id, size: size, color: color }))
          }
        />
        <div className="w-28 h-9 sm:w-36 sm:h-11 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
          <button
            className="w-auto h-full text-center text-2xl sm:text-4xl font-satoshi outline-none"
            onClick={() =>
              dispatch(Decrease({ productID: id, size: size, color: color }))
            }
          >
            -
          </button>
          <span className="w-auto h-auto text-xl sm:text-2xl font-satoshi">
            {quantity}
          </span>
          <button
            className="w-auto h-full text-center text-2xl sm:text-4xl font-satoshi outline-none"
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
