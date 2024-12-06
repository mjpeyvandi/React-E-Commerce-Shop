import React from "react";

export const SkeltonOrder = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start gap-3 sm:gap-0 sm:justify-between items-center">
        {/* details */}
        <div className="w-full h-[45%] xs:h-[45%]  flex flex-col justify-between items-start gap-3 pb-4 sm:pb-3">
          <div className="animate-pulse bg-gray-300 rounded-lg w-full h-9"></div>
          <div className="w-full h-5 flex justify-start items-center gap-5">
            <div className="animate-pulse bg-gray-300 rounded-lg w-3/12 h-full"></div>
            <div className="animate-pulse bg-gray-300 rounded-lg w-1/12 h-full"></div>
          </div>

          <div className="animate-pulse bg-gray-300 rounded-lg w-1/5 h-8"></div>
          <div className="animate-pulse bg-gray-300 rounded-lg w-full h-6"></div>
        </div>
        {/* color */}
        <div className="w-full h-auto xs:h-[20%]  flex flex-col justify-center gap-2 items-start border-y-[0.2px] py-4 border-y-gray-300">
          <div className="animate-pulse bg-gray-300 rounded-lg w-2/5 h-6"></div>

          <div className="w-auto flex flex-row justify-start items-center gap-2">
            <div className="rounded-full size-12 animate-pulse bg-gray-300"></div>
            <div className="rounded-full size-12 animate-pulse bg-gray-300"></div>
            <div className="rounded-full size-12 animate-pulse bg-gray-300"></div>
            <div className="rounded-full size-12 animate-pulse bg-gray-300"></div>
          </div>
        </div>
        {/* size */}
        <div className="w-full h-auto xs:h-[20%]  flex flex-col justify-center gap-2 items-start border-b-[0.2px] py-4 border-b-gray-300">
          <div className="animate-pulse bg-gray-300 rounded-lg w-2/5 h-6"></div>

          <div className="w-full h-9 flex flex-row justify-start items-center xs:flex-nowrap wrap flex-wrap gap-2">
            <div className="rounded-2xl w-2/12 h-full animate-pulse bg-gray-300"></div>
            <div className="rounded-2xl w-2/12 h-full animate-pulse bg-gray-300"></div>
            <div className="rounded-2xl w-2/12 h-full animate-pulse bg-gray-300"></div>
          </div>
        </div>
        {/* add to cart */}
        <div className="w-full h-auto xs:h-[15%] flex flex-row justify-between items-center sm:items-end gap-4 py-4">
          <div className="w-2/5 sm:w-1/4 h-12 animate-pulse bg-slate-300 rounded-3xl flex flex-row justify-between items-center align-baseline px-5"></div>
          <div className="w-3/5 sm:w-3/4 h-12 animate-pulse bg-slate-300 rounded-3xl"></div>
        </div>
      </div>
    </>
  );
};
