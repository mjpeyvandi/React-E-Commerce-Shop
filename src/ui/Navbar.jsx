import React, { useState } from "react";

import { GoChevronDown } from "@react-icons/all-files/go/GoChevronDown";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";

import { Search } from "./Search";
import { ModalMenu } from "./ModalMenu";
import { Link } from "react-router-dom";

export const Navbar = ({setOp}) => {
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
              <Link to={'/main/products'}>
               Shop  
              </Link>
              <GoChevronDown />
            </li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">On Sale</li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">
              New Arrivals
            </li>
            <li className="h-full flex items-center cursor-pointer hover:font-bold">Brands</li>
          </ul>
          <Search />
          <div className="w-16 flex flex-row justify-between items-center">
            <FiShoppingCart className="size-6 cursor-pointer" />
            <FaRegUserCircle className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
        <ModalMenu state={showModal} setOp={setOp} />
    </>
  );
};
