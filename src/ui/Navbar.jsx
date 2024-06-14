import React, { useState } from "react";

import { GoChevronDown } from "@react-icons/all-files/go/GoChevronDown";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";

import { Search } from "./Search";
import { ModalMenu } from "./ModalMenu";
import { Link } from "react-router-dom";

export const Navbar = ({ setOp }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-full h-20">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <span className="font-titr text-3xl cursor-pointer">SHOP.CO</span>
          <ul className="h-full flex flex-row justify-between items-center align-baseline font-satoshi space-x-3">
            <li
              className="h-full inline-flex justify-between items-center cursor-pointer hover:font-bold"
              onMouseEnter={() => setShowModal(true) & setOp(true)}
              onMouseLeave={() => setShowModal(false) & setOp(false)}
            >
              <Link to={"/products"}>Shop</Link>
              <GoChevronDown />
            </li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">
              <Link to={"/products/onsale"}>On Sale</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">
              <Link to={"/products/new"}>New Arrivals</Link>
            </li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">
              Brands
            </li>
          </ul>
          <Search />
          <div className="w-16 flex flex-row justify-between items-center">
            <Link to={"/cart"}>
              <FiShoppingCart className="size-6 cursor-pointer" />
            </Link>
            <FaRegUserCircle className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <ModalMenu state={showModal} setOp={setOp} />
    </>
  );
};
