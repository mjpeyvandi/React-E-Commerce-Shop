import React, { useState } from "react";

import filters from "../../assets/images/filters.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

import PriceRange from "./PriceRange";
import Color from "./Color";
import { Size } from "./Size";
import { Button } from "../home/Button";

export const FilterSection = () => {
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showColors, setShowColors] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showStyle, setShowStyle] = useState(true);

  const [showCasual, setShowCasual] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [showGym, setShowGym] = useState(false);

  const colors = [
    "green",
    "red",
    "yellow",
    "orange",
    "sky",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const togglePriceRange = () => {
    setShowPriceRange(!showPriceRange);
  };

  const toggleColors = () => {
    setShowColors(!showColors);
  };
  const toggleSize = () => {
    setShowSize(!showSize);
  };
  const toggleStyle = () => {
    setShowStyle(!showStyle);
  };
  const toggleCasual = () => {
    setShowCasual(!showCasual);

    if (showGym) {
      setShowGym(false);
    } else if (showParty) {
      setShowParty(false);
    }
  };
  const toggleParty = () => {
    setShowParty(!showParty);

    if (showCasual) {
      setShowCasual(false);
    } else if (showGym) {
      setShowGym(false);
    }
  };
  const toggleGym = () => {
    setShowGym(!showGym);

    if (showCasual) {
      setShowCasual(false);
    } else if (showParty) {
      setShowParty(false);
    }
  };

  return (
    <div
      className="h-full w-full rounded-2xl bg-white border-[0.2px] border-gray-300 p-4 flex flex-col justify-start items-center
     align-baseline gap-4"
    >
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="font-satoshi-b text-xl">Filters</h2>
        <img src={filters} alt="" />
      </div>

      {/* category */}
      <div className="w-full border-y-[0.2px] border-gray-300">
        <ul className="w-full flex flex-col justify-between items-start py-4 gap-3">
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            T-shirts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Shorts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Shirts
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Hoddie
          </li>
          <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
            Jeans
          </li>
        </ul>
      </div>

      {/* price */}
      <div className="w-full flex flex-col justify-start items-center align-baseline gap-5">
        <div
          className="w-full flex flex-row justify-between items-center cursor-pointer"
          onClick={togglePriceRange}
        >
          <h2 className="font-satoshi-b text-xl">Price</h2>
          {showPriceRange ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        {showPriceRange && <PriceRange />}
      </div>

      {/* colors */}
      <div className="w-full flex flex-col justify-start items-center align-baseline gap-5 py-4 border-y-[0.2px] border-gray-300">
        <div
          className="w-full flex flex-row justify-between items-center cursor-pointer"
          onClick={toggleColors}
        >
          <h2 className="font-satoshi-b text-xl">Colors</h2>
          {showColors ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        {showColors && (
          <div className="w-full grid grid-cols-5 gap-x-6 gap-y-2">
            {colors.map((item, id) => {
              return <Color value={item} key={id} />;
            })}
          </div>
        )}
      </div>

      {/* size */}
      <div className="w-full flex flex-col justify-start items-center align-baseline gap-5 py-1">
        <div
          className="w-full flex flex-row justify-between items-center cursor-pointer"
          onClick={toggleSize}
        >
          <h2 className="font-satoshi-b text-xl">Size</h2>
          {showSize ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        {showSize && (
          <div className="w-full flex flex-row flex-wrap justify-start items-center gap-3">
            {sizes.map((item, id) => {
              return <Size value={item} key={id} />;
            })}
          </div>
        )}
      </div>

      {/* dress style */}
      <div className="w-full flex flex-col justify-start items-center align-baseline py-1">
        <div
          className="w-full flex flex-row justify-between items-center cursor-pointer"
          onClick={toggleStyle}
        >
          <h2 className="font-satoshi-b text-xl">Dress Style</h2>
          {showSize ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
        {showStyle && (
          <ul className="w-full max-h-[164px] overflow-auto flex flex-col justify-between items-start py-4 gap-3">
            <div
              className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
              onClick={toggleCasual}
            >
              <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
                Casual
              </li>
              {showCasual ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {showCasual && (
              <ul className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> t-shirt
                </label>
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> shirt
                </label>
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> maxi
                </label>
              </ul>
            )}
            <div
              className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
              onClick={toggleParty}
            >
              <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
                Party
              </li>
              {showParty ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {showParty && (
              <ul className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> maxi
                </label>
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> midi
                </label>
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> mini
                </label>
              </ul>
            )}

            <div
              className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
              onClick={toggleGym}
            >
              <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
                Gym
              </li>
              {showParty ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>

            {showGym && (
              <ul className="w-full flex flex-col justify-start items-start gap-2">
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> shirt
                </label>
                <label className="font-satoshi-l">
                  <input type="checkbox" className="accent-gray-300" /> short
                </label>
              </ul>
            )}
            <li className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900">
              Formal
            </li>
          </ul>
        )}
      </div>

      {/* apply */}
      <Button
        width={"w-full"}
        height={"h-10"}
        bg={"bg-black"}
        textColor={"text-white"}
        font={"satoshi text-sm"}
      >
        Apply Filter
      </Button>
    </div>
  );
};
