import React, { useEffect, useState } from "react";

import { getArrivals } from "../services/getArrivals";
import { getTopSell } from "../services/getTopSell";

import { Button } from "../components/home/Button";
import { PreviewSection } from "../components/home/PreviewSection";
import { CardStyle } from "../components/home/CardStyle";
import { Slider } from "../components/home/Slider";

import banner from "../assets/images/Rectangle 2.jpg";
import versace from "../assets/images/versace.png";
import zara from "../assets/images/zara.png";
import gucci from "../assets/images/gucci.png";
import prada from "../assets/images/prada.png";
import calvin from "../assets/images/calvin.png";
import casual from "../assets/images/casual.png";
import party from "../assets/images/party.png";
import gym from "../assets/images/gym.png";
import formal from "../assets/images/formal.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    getArrivals().then((data) => setNewProducts(data));
    getTopSell().then((data) => setBestSelling(data));
  }, []);

  return (
    <div className="w-full h-full">
      {/*header*/}
      <div className="w-full bg-gray-200 h-[53rem] sm:h-[73rem] md:h-[40rem]">
        <div className="container mx-auto w-full h-full">
          <div className="w-full h-full  grid grid-cols-1 md:block md:columns-2 py-6 md:p-0 gap-3 sm:gap-0">
            <div className="w-full h-full flex flex-col justify-between md:justify-center items-start space-y-6 md:space-y-10">
              <p className="w-full md:w-auto font-titr text-4xl sm:text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
              <p className="w-full md:w-auto font-satoshi-l opacity-85">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button
                bg={"bg-black"}
                textColor={"text-white"}
                width={"w-full md:w-48"}
                height={"h-12"}
                font={"font-satoshi"}
              >
                <Link to={"/products"}>Shop Now</Link>
              </Button>
              <div className="w-full flex flex-row flex-wrap sm:flex-nowrap justify-center md:justify-between items-center align-baseline sm:gap-10">
                <div className="w-1/2 sm:w-1/3  flex flex-col justify-center sm:items-start items-center border-r-2 border-gray-400">
                  <p className="font-satoshi-b text-2xl md:text-4xl">200+</p>
                  <span className="font-satoshi-l opacity-85 text-xs sm:text-base">
                    International Brands
                  </span>
                </div>

                <div className="w-1/2 sm:w-1/3  flex flex-col justify-center sm:items-start items-center sm:border-r-2 border-gray-400">
                  <p className="font-satoshi-b text-2xl md:text-4xl">2,000+</p>
                  <span className="font-satoshi-l opacity-85 text-xs sm:text-base">
                    High-Quality Products
                  </span>
                </div>

                <div className="w-1/2 sm:w-1/3  flex flex-col justify-center sm:items-start items-center text-left mt-2">
                  <p className="font-satoshi-b text-2xl md:text-4xl">30,000+</p>
                  <span className="font-satoshi-l opacity-85 text-xs sm:text-base">
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

      {/*brands */}
      <div className="w-full h-auto py-5 md:p-0 md:h-32 bg-black relative">
        <div className="w-full h-full container mx-auto flex flex-wrap md:flex-nowrap flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
          <img className="w-24 h-7 md:w-auto md:h-auto" src={versace} alt="brands" />
          <img className="w-24 h-7 md:w-auto md:h-auto" src={zara} alt="brands" />
          <img className="w-24 h-7 md:w-auto md:h-auto" src={gucci} alt="brands" />
          <img className="w-24 h-7 md:w-auto md:h-auto" src={prada} alt="brands" />
          <img className="w-24 h-7 md:w-auto md:h-auto" src={calvin} alt="brands" />
        </div>
      </div>

      {/*new Arrivals */}
      <PreviewSection
        titr={"NEW ARRIVALS"}
        products={newProducts}
        border={"border-b-[1px] border-gray-300"}
      />

      {/*Top selling */}
      <PreviewSection titr={"TOP SELLING"} products={bestSelling} />

      {/*styles section */}
      <div className="w-full h-[58rem] md:h-[42rem] bg-white mt-4">
        <div className="container w-full h-full bg-gray-100 mx-auto rounded-[2.5rem] px-8 md:px-10 md:py-16">
          <div className="w-full md:h-1/6 text-center py-6 md:p-0">
            <h2 className="font-titr text-3xl md:text-5xl">BROWSE BY dress STYLE</h2>
          </div>
          <div className="w-full h-5/6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardStyle
              span={"md:col-span-1"}
              image={casual}
              text={"Casual"}
              scale={"scale-x-[-1]"}
            />
            <CardStyle
              span={"md:col-span-2"}
              image={formal}
              text={"Formal"}
              scale={"scale-x-[-1]"}
            />
            <CardStyle span={"md:col-span-2"} image={party} text={"Party"} />
            <CardStyle span={"md:col-span-1"} image={gym} text={"Gym"} />
          </div>
        </div>
      </div>

      {/*reviews section */}

      <div className="w-full h-96 md:h-80 bg-white my-4 md:my-16">
        <Slider />
      </div>
    </div>
  );
};
