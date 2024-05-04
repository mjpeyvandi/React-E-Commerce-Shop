import React from "react";

import banner from "../assets/images/Rectangle 2.jpg";

export const Home = () => {
  return (
    <div className="w-full bg-gray-200 h-[40rem]">
      <div className="container mx-auto w-full h-full">
        <div className="w-full h-full columns-2">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-10">
            <p className="font-titr text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <p className="font-satoshi-l opacity-85">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="items-center rounded-3xl bg-black text-white w-48 h-12">
              Shop Now
            </button>
            <div className="w-full flex flex-row justify-between items-center align-baseline gap-10 ">
              <div className="w-1/3 flex flex-col justify-center items-start border-r-2 border-gray-400">
                <p className="font-satoshi-b text-4xl">200+</p>
                <span className="font-satoshi-l opacity-85">
                  International Brands
                </span>
              </div>

              <div className="w-1/3 flex flex-col justify-center items-start border-r-2 border-gray-400">
                <p className="font-satoshi-b text-4xl">2,000+</p>
                <span className="font-satoshi-l opacity-85">
                  High-Quality Products
                </span>
              </div>

              <div className="w-1/3 flex flex-col justify-center items-start text-left">
                <p className="font-satoshi-b text-4xl">30,000+</p>
                <span className="font-satoshi-l opacity-85">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full mb-4">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
