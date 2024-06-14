import React, { useState } from "react";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import image from "../assets/images/image 1.png";
import { Link } from "react-router-dom";

export const ModalMenu = ({ state, setOp }) => {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);

  return (
    <div
      className={`w-full h-96 ${
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
              className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onMouseEnter={() => setShowSubMenu("casual")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <Link to={`/products/casual`}>Casual</Link>

              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "casual" ? "block" : "hidden"
                }`}
              >
                <li className="cursor-pointer">
                  <Link to={`/products/casual/t-shirt`}>T-Shirt</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={`/products/casual/shirt`}>Shirt</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={`/products/casual/maxi`}>Maxi</Link>
                </li>
              </ul>
            </li>
            <li
              className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onMouseEnter={() => setShowSubMenu("party")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <Link to={`/products/party`}>Party</Link>

              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "party" ? "block" : "hidden"
                }`}
              >
                <li className="">
                  <Link to={`/products/party/maxi`}>Maxi</Link>
                </li>
                <li className="">
                  <Link to={`/products/party/midi`}>Midi</Link>
                </li>
                <li className="">
                  <Link to={`/products/party/mini`}>Mini</Link>
                </li>
              </ul>
            </li>
            <li
              className="relative w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold"
              onMouseEnter={() => setShowSubMenu("gym")}
              onMouseLeave={() => setShowSubMenu(null)}
            >
              <Link to={`/products/gym`}>Gym</Link>
              <MdKeyboardArrowRight />
              <ul
                className={`absolute flex flex-col justify-center items-center gap-3 left-64 font-satoshi-l ${
                  showSubMenu === "gym" ? "block" : "hidden"
                }`}
              >
                <li className="">
                  <Link to={`/products/gym/shirt`}>Shirt</Link>
                </li>
                <li className="">
                  <Link to={`/products/gym/t-shirt`}>T-Shirt</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/products/formal`}>Formal</Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center gap-6 bg-gray-100 border-x-2 border-stone-800">
          <h4 className="font-titr-m">CATEGORIES</h4>
          <ul className="w-full flex flex-col justify-between items-center gap-3 font-satoshi">
            <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold">
            <Link to={`/products/t-shirts`}>T-Shirts</Link>

            </li>
            <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold">
            <Link to={`/products/shirts`}>Shirts</Link>
            </li>
            <li className="w-full inline-flex justify-center items-baseline cursor-pointer align-baseline hover:font-bold">
            <Link to={`/products/shorts`}>Shorts</Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
            <Link to={`/products/hoodies`}>Hoddies</Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
            <Link to={`/products/jeans`}>Jeans</Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full">
          <img
            src={image}
            alt="shop"
            className="relative w-full h-full object-cover hover:opacity-70 hover:transition-opacity duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
