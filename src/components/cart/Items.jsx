import React from "react";

import trash from "../../assets/images/trash.png"

export const Items = () => {
  return (
    <div className="h-36 w-full flex flex-row justify-between items-center">
        {/* item details */}
      <div className="w-auto h-full flex flex-row justify-start items-center gap-4">
        <img
          src="https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/shirts/shirt-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9zaGlydHMvc2hpcnQtMi5wbmciLCJpYXQiOjE3MTIzMjAzNDksImV4cCI6MTgwNjkyODM0OX0.-Wj_qyUU8ov7OKu5RsqpEai60iyPOCoIVbBFg0lZ3vA&t=2024-04-05T12%3A32%3A28.711Z"
          alt="defe"
          className="h-full w-36 object-cover rounded-2xl"
        />
        <div className="h-full w-auto flex flex-col justify-between items-start">
          <div className="h-4/5 w-auto flex flex-col justify-start items-start gap-1">
            <h2 className="font-satoshi-b text-xl">Gradient Graphic T-shirt</h2>
            <p className="font-satoshi text-sm ">
              Size: <span className="font-satoshi text-sm text-gray-400 font-light">Large</span>
            </p>
            <p className="font-satoshi text-sm ">
              Color: <span className="font-satoshi text-sm text-gray-400 font-light">White</span>
            </p>
          </div>
          <h2 className="font-satoshi-b text-2xl">$145</h2>
        </div>
      </div>
    {/* manage item */}
      <div className="w-auto h-full flex flex-col justify-between items-end">
        <img src={trash} alt="dd" />
        <div className="w-36 h-11 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
          >
            -
          </button>
          <span className="w-auto h-auto text-2xl font-satoshi">
            1
          </span>
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
