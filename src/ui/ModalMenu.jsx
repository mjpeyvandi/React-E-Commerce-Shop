import React, { useState } from "react";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import image from "../assets/images/image 1.png";
import { Link, useNavigate } from "react-router-dom";
import useFilters from "../context/FiltersContext";

export const ModalMenu = ({ state, setOp }) => {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const { setFilter } = useFilters();
  const navigate = useNavigate();

  const handleLinkClick = (item, type) => {
    setFilter({
      category: [],
      lowPrice: 0,
      maxPrice: 500,
      colors: [],
      sizes: [],
      style: {
        casual: [],
        party: [],
        gym: [],
      },
    });
    navigate(`/products?${type}=${item}`);
    setShow(false);
  };

  return (
    <div
      className={`w-full h-96 mb-1 ${
        state || show ? "block" : "hidden"
      } container mx-auto fixed z-[1000]`}
      onMouseEnter={() => setShow(true) & setOp(true)}
      onMouseLeave={() => setShow(false) & setOp(false)}
    >
      <div className="w-full h-full columns-3 bg-gray-100 p-5">
        <div className="w-full h-full flex flex-col justify-start items-center gap-6 bg-gray-100">
          <h4 className="font-titr-m">DRESS STYLE</h4>
          <ul className="w-full flex flex-col justify-between items-center gap-3 font-satoshi">
            <li
              className="relative w-full  inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onMouseEnter={() => setShowSubMenu("casual")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <span>Casual</span>

              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "casual" ? "block" : "hidden"
                }`}
              >
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("t-shirt", "casual")}
                >
                  T-Shirt
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("shirt", "casual")}
                >
                  Shirt
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("maxi", "casual")}
                >
                  Maxi
                </li>
              </ul>
            </li>
            <li
              className={`relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold `}
              onMouseEnter={() => setShowSubMenu("party")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <span>Party</span>

              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "party" ? "block" : "hidden"
                }`}
              >
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("maxi", "party")}
                >
                  Maxi
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("midi", "party")}
                >
                  Midi
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("mini", "party")}
                >
                  Mini
                </li>
              </ul>
            </li>
            <li
              className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onMouseEnter={() => setShowSubMenu("gym")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <span>Gym</span>
              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "gym" ? "block" : "hidden"
                }`}
              >
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("shirt", "gym")}
                >
                  Shirt
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleLinkClick("short", "gym")}
                >
                  Short
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={() => setShow(false)} to={`/products`}>
                Formal
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center gap-6 bg-gray-100 border-x-2 border-stone-800">
          <h4 className="font-titr-m">CATEGORIES</h4>
          <ul className="w-full flex flex-col justify-between items-center gap-3 font-satoshi">
            <li
              className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onClick={() => handleLinkClick("T-Shirts", "category")}
            >
              T-Shirts
            </li>
            <li
              className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onClick={() => handleLinkClick("Shirts", "category")}
            >
              Shirts
            </li>
            <li
              className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onClick={() => handleLinkClick("Shorts", "category")}
            >
              Shorts
            </li>
            <li
              className="cursor-pointer hover:font-bold"
              onClick={() => handleLinkClick("Hoddie", "category")}
            >
              Hoddies
            </li>
            <li
              className="cursor-pointer hover:font-bold"
              onClick={() => handleLinkClick("Jeans", "category")}
            >
              Jeans
            </li>
          </ul>
        </div>
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="shop"
            className="static w-full h-full object-cover cursor-pointer"
          />
          <Link
            onClick={() => setShow(false)}
            className="w-full z-[100] absolute bottom-0 left-0 h-12 rounded-md text-center transition-all duration-700 hover:bg-slate-700 text-white bg-black"
            to={"products/product/Red%20Plaid%20Flannel%20Shirt/22"}
          >
            <button className="w-full h-full text-inherit font-satoshi text-xl ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
