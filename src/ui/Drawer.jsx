import React, { useState } from "react";

import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const Drawer = ({ open, setShowMenu }) => {
  const [showItems, setShowItems] = useState(false);
  // const [showAnimate, setShowAnimate] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const [showCat, setShowCat] = useState(false);

  const [showCasual, setShowCasual] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [showGym, setShowGym] = useState(false);

  const casuals = ["t-shirt", "shirt", "maxi"];
  const partys = ["maxi", "midi", "mini"];
  const gyms = ["shirt", "short"];

  const category = ["T-Shirts", "Shirts", "Shorts", "Hoddie", "Jeans"];

  const toggleItems = () => {
    setShowItems((showItems) => !showItems);

    // if (showItems === false) {
    //   setShowItems((showItems) => !showItems);
    //   setTimeout(() => setShowAnimate(true), 50);
    // } else {
    //   setShowAnimate(false);
    //   setTimeout(() => {
    //     setShowItems(false);
    //   }, 700);
    // }
  };
  const toggleStyle = () => {
    setShowCat(false);
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
  const toggleCat = () => {
    setShowStyle(false);
    setShowCat(!showCat);
  };

  return (
    <div
      className={`fixed -translate-x-0 z-[100] top-0 left-0 bg-white w-4/5 h-screen p-1 transform transition-transform duration-[1500ms] ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="container mx-auto overflow-scroll relative h-full w-full flex flex-col justify-start items-center">
        {/* title */}
        <div
          className={`fixed absolute w-full border-b-[0.2px] border-gray-300 bg-inherit flex flex-row justify-between items-center p-4 z-50`}
        >
          <h2 className="font-satoshi-b text-xl uppercase">Menu</h2>
          <IoClose
            className="block lg:hidden text-gray-500 size-7"
            onClick={() => setShowMenu(false)}
          />
        </div>

        {/* products items */}
        <div
          className={`w-full flex flex-col justify-start items-center p-2 mt-16`}
        >
          <div
            className="w-full z-[100] flex flex-row justify-between items-center cursor-pointer "
            onClick={() => toggleItems()}
          >
            <h2 className="font-satoshi-b text-xl">Products</h2>
            <IoIosArrowForward
              className={`${
                showItems ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
            />
          </div>
          {/* transform transition-transform duration-700 ${showItems ? `` : `transform-none`} ${showAnimate ? `-translate-y-0` : `-translate-y-2`}  */}
          {showItems === true ? (
            <div className={`w-full h-auto overflow-hidden`}>
              {/* dress style */}
              <div className="w-full flex flex-col justify-start items-center align-baseline pt-2 lg:overflow-auto">
                <div
                  className="w-full flex flex-row justify-between items-center cursor-pointer "
                  onClick={toggleStyle}
                >
                  <h2 className="font-satoshi-b text-lg">Dress Style</h2>
                  <IoIosArrowForward
                    className={`${
                      showStyle ? "rotate-90" : "rotate-0"
                    } transition-transform duration-300`}
                  />
                </div>
                {showStyle && (
                  <ul className="w-full overflow-auto flex flex-col justify-between items-start py-2 gap-2 scrollbar-hidden">
                    <div
                      className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
                      onClick={toggleCasual}
                    >
                      <li className="font-satoshi text-base cursor-pointer hover:text-slate-900">
                        Casual
                      </li>
                      <IoIosArrowForward
                        className={`${
                          showCasual ? "rotate-90" : "rotate-0"
                        } transition-transform duration-300`}
                      />
                    </div>
                    {showCasual && (
                      <ul className="w-full flex flex-col justify-start items-start gap-2">
                        {casuals.map((item) => {
                          return (
                            <li className="font-satoshi text-gray-700 text-base">
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <div
                      className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
                      onClick={toggleParty}
                    >
                      <li className="font-satoshi text-base  cursor-pointer hover:text-slate-900">
                        Party
                      </li>
                      <IoIosArrowForward
                        className={`${
                          showParty ? "rotate-90" : "rotate-0"
                        } transition-transform duration-300`}
                      />
                    </div>
                    {showParty && (
                      <ul className="w-full flex flex-col justify-start items-start gap-2">
                        {partys.map((item) => {
                          return (
                            <li className="font-satoshi text-gray-700 text-base">
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <div
                      className="w-full flex flex-row justify-between items-center align-baseline cursor-pointer"
                      onClick={toggleGym}
                    >
                      <li className="font-satoshi text-base cursor-pointer hover:text-slate-900">
                        Gym
                      </li>
                      <IoIosArrowForward
                        className={`${
                          showGym ? "rotate-90" : "rotate-0"
                        } transition-transform duration-300`}
                      />
                    </div>
                    {showGym && (
                      <ul className="w-full flex flex-col justify-start items-start gap-2">
                        {gyms.map((item) => {
                          return (
                            <li className="font-satoshi text-gray-700 text-base">
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </ul>
                )}
              </div>
              {/* category */}
              <div className="w-full flex flex-col justify-start items-center align-baseline pt-2">
                <div
                  className="w-full flex flex-row justify-between items-center cursor-pointer "
                  onClick={toggleCat}
                >
                  <h2 className="font-satoshi-b text-lg">Category</h2>
                  <IoIosArrowForward
                    className={`${
                      showCat ? "rotate-90" : "rotate-0"
                    } transition-transform duration-300`}
                  />
                </div>
                {showCat && (
                  <ul className="w-full flex flex-col justify-between items-start py-2 gap-3">
                    {category.map((item) => {
                      return (
                        <li className="font-satoshi text-gray-700 text-base">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ) : null}
        </div>

        {/* on sale item */}
        <Link to={"/"} className="w-full p-2">
          <h2 className="font-satoshi-b text-left text-xl">On Sale</h2>
        </Link>

        {/* arrivals item */}
        <Link to={"/"} className="w-full p-2">
          <h2 className="font-satoshi-b text-left text-xl">New Arrivals</h2>
        </Link>

        {/* brands item */}
        <Link to={"/"} className="w-full p-2">
          <h2 className="font-satoshi-b text-left text-xl">Brands</h2>
        </Link>
      </div>
    </div>
  );
};
