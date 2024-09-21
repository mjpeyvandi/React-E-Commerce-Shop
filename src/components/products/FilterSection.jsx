import React, { useState } from "react";

import filters from "../../assets/images/filters.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

import PriceRange from "./PriceRange";
import Color from "./Color";
import { Size } from "./Size";
import { Button } from "../home/Button";
import useFilters from "../../context/FiltersContext";

export const FilterSection = () => {
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showColors, setShowColors] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showStyle, setShowStyle] = useState(true);

  const [showCasual, setShowCasual] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [showGym, setShowGym] = useState(false);

  const {
    Filters,
    setFilter,
    handleCategoryChange,
    handlePriceChange,
    handleColorChange,
    handleSizeChange,
    handleStyleCasualChange,
    handleStylePartyChange,
    handleStyleGymChange,
   } = useFilters();


  const category = ["T-Shirts", "Shirts", "Shorts", "Hoddie", "Jeans"];
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
  const casuals = ["t-shirt", "shirt", "maxi"];
  const partys = ["maxi", "midi", "mini"];
  const gyms = ["shirt", "short"];

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
          {category.map((item) => {
            return (
              <label key={item} className="font-satoshi-l flex gap-3">
                <input
                  type="checkbox"
                  className="accent-gray-300"
                  checked={Filters.category.includes(item)}
                  onChange={(event) => handleCategoryChange(event, item)}
                />{" "}
                {item}
              </label>
            );
          })}
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
        {showPriceRange && <PriceRange onPriceChange={handlePriceChange} />}
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
              return (
                <Color
                  value={item}
                  key={id}
                  onClick={() => handleColorChange(item)}
                  checked={Filters.colors}
                />
              );
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
              return (
                <Size
                  value={item}
                  key={id}
                  onClick={() => handleSizeChange(item)}
                  sizes={Filters.sizes}
                />
              );
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
                {casuals.map((item) => {
                  return (
                    <label className="font-satoshi-l flex gap-3" key={item}>
                      <input
                        type="checkbox"
                        className="accent-gray-300"
                        checked={Filters.style.casual.includes(item)}
                        onChange={(event) =>
                          handleStyleCasualChange(event, item)
                        }
                      />
                      {item}
                    </label>
                  );
                })}
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
                {partys.map((item) => {
                  return (
                    <label className="font-satoshi-l flex gap-3" key={item}>
                      <input
                        type="checkbox"
                        className="accent-gray-300"
                        checked={Filters.style.party.includes(item)}
                        onChange={(event) =>
                          handleStylePartyChange(event, item)
                        }
                      />{" "}
                      {item}
                    </label>
                  );
                })}
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
                {gyms.map((item) => {
                  return (
                    <label className="font-satoshi-l flex gap-3" key={item}>
                      <input
                        type="checkbox"
                        className="accent-gray-300"
                        checked={Filters.style.gym.includes(item)}
                        onChange={(event) => handleStyleGymChange(event, item)}
                      />{" "}
                      {item}
                    </label>
                  );
                })}
              </ul>
            )}
            {/* <label className="font-satoshi-l text-gray-500 cursor-pointer hover:text-slate-900 flex gap-3">
              <input
                type="checkbox"
                className="accent-gray-300"
                checked={Filters.style.formal}
                onChange={(event) => handleStyleFormalChange(event)}
              />{" "}
              Formal
            </label> */}
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
        clickHandler={()=> setFilter({...Filters})}
      >
        Apply Filter
      </Button>
    </div>
  );
};
