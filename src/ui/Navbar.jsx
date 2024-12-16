import React, { useEffect, useState } from "react";

import { GoChevronDown } from "@react-icons/all-files/go/GoChevronDown";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";

import { Search } from "./Search";
import { ModalMenu } from "./ModalMenu";
import { Link } from "react-router-dom";
import { ModalSearchMobile } from "./ModalSearchMobile";

export const Navbar = ({ setOp, setShowMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [showAnimate, setShowAnimate] = useState(false);

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const openFilter = () => {
    setshowSearch(true);
    setTimeout(() => setShowAnimate(true), 50);
  };

  const closeFilter = () => {
    setShowAnimate(false);
    setTimeout(() => {
      setshowSearch(false);
    }, 1000);
  };

  return (
    <>
      <div className="w-full h-14 md:h-20">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="w-auto h-full flex justify-start items-center gap-4">
            <FiMenu className="lg:hidden size-6 cursor-pointer mt-1" onClick={()=> setShowMenu(true)} />
            <Link to={"/"}>
              <span className="h-full text-center flex items-center font-titr text-3xl cursor-pointer">
                SHOP.CO
              </span>
            </Link>
          </div>
          <ul className="h-full hidden lg:flex flex-row justify-between items-center align-baseline font-satoshi space-x-3">
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
          <div className={` hidden md:block lg:w-2/5 md:w-3/5 md:h-1/2 bg-gray-200 rounded-full box-border`}>
            <Search/>
          </div>
          
          <div className="w-auto flex flex-row justify-between items-center gap-4 md:gap-3">
            <BsSearch className="md:hidden size-6 cursor-pointe" onClick={() => openFilter()} />
              
                {showSearch && (
                  <div className="fixed inset-0 bg-black opacity-50" onClick={() => closeFilter()}></div>
                )}
                <div
                  className={`transform transition-transform duration-[1000ms] rounded-t-2xl bg-white ${
                    showSearch === true
                      ? "fixed inset-0 z-[200] overflow-y-auto w-full h-auto top-12 left-0 shadow-2xl shadow-white"
                      : "hidden transform-none"
                  }
                  ${showAnimate ? `translate-y-0` : `translate-y-full`} `}
                >
                  <ModalSearchMobile close={() => closeFilter()} mobile={showSearch} />
                </div>
              
            <Link to={"/cart"}>
              <FiShoppingCart className="size-6 cursor-pointer flex justify-center items-center"/> 
            </Link>
            <FaRegUserCircle className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <ModalMenu state={showModal} setOp={setOp} />
    </>
  );
};
