import React from "react";

import { GoChevronDown } from "@react-icons/all-files/go/GoChevronDown";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import image from '../assets/images/image 1.png'

import { Search } from "./Search";

export const Navbar = () => {
  return (
    <>
      <div className="w-full h-20">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <span className="font-titr text-3xl">SHOP.CO</span>
          <ul className="flex flex-row justify-between items-center font-satoshi space-x-3">
            <li className="inline-flex justify-between items-center cursor-pointer">
              Shop <GoChevronDown />
            </li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
          </ul>
          <Search />
          <div className="w-16 flex flex-row justify-between items-center">
            <FiShoppingCart className="size-6" />
            <FaRegUserCircle className="size-6" />
          </div>
        </div>
      </div>
      <div className="w-full h-96 ">
        <div className="w-full h-full columns-3 bg-red-500 p-5">
          <div className="w-full h-full flex flex-col justify-start items-center gap-6 bg-green-500">
            <h4 className="font-titr-m">DRESS STYLE</h4>
            <ul className="w-full flex flex-col justify-between items-center gap-3 font-satoshi">
              <li className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                Casual <MdKeyboardArrowRight />
                <ul className="absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l hidden">
                  <li className="cursor-pointer">T-Shirt</li>
                  <li className="cursor-pointer">Shirt</li>
                  <li className="cursor-pointer">Maxi</li>
                </ul>
              </li>
              <li className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                Party <MdKeyboardArrowRight />
                <ul className="absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l hidden">
                  <li>Maxi</li>
                  <li>Midi</li>
                  <li>Mini</li>
                </ul>
              </li>
              <li className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                Gym <MdKeyboardArrowRight />
                <ul className="absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l hidden">
                  <li>Shirt</li>
                  <li>Short</li>
                </ul>
              </li>
              <li>Formal</li>
            </ul>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center gap-6 bg-white border-x-2 border-stone-800">
            <h4 className="font-titr-m">CATEGORIES</h4>
            <ul className="w-full flex flex-col justify-between items-center gap-3 font-satoshi">
              <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                T-Shirts
              </li>
              <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                Shirts
              </li>
              <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline">
                Shorts
              </li>
              <li className="cursor-pointer">Hoodie</li>
              <li className="cursor-pointer">Jeans</li>
            </ul>
          </div>
          <div className="w-full h-full bg-blue-500">
            <img src={image} alt="shop" className="relative w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};
