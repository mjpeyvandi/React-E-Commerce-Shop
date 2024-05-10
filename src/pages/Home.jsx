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
      <div className="w-full bg-gray-200 h-[40rem]">
        <div className="container mx-auto w-full h-full">
          <div className="w-full h-full columns-2">
            <div className="w-full h-full flex flex-col justify-center items-start space-y-10">
              <p className="font-titr text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
              <p className="font-satoshi-l opacity-85">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button bg={"bg-black"} textColor={"text-white"}>
                Shop Now
              </Button>
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

      {/*brands */}
      <div className="w-full h-32 bg-black relative">
        <div className="w-full h-full container mx-auto flex flex-row justify-between items-center">
          <img src={versace} alt="brands" />
          <img src={zara} alt="brands" />
          <img src={gucci} alt="brands" />
          <img src={prada} alt="brands" />
          <img src={calvin} alt="brands" />
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
      <div className="w-full h-[42rem] bg-white mt-4">
        <div className="container w-full h-full bg-gray-100 mx-auto rounded-[2.5rem] px-10 py-16">
          <div className="w-full h-1/6 text-center">
            <h2 className="font-titr text-5xl">BROWSE BY dress STYLE</h2>
          </div>
          <div className="w-full h-5/6 grid grid-cols-3 gap-4">
            <CardStyle
              span={"col-span-1"}
              image={casual}
              text={"Casual"}
              scale={"scale-x-[-1]"}
            />
            <CardStyle
              span={"col-span-2"}
              image={formal}
              text={"Formal"}
              scale={"scale-x-[-1]"}
            />
            <CardStyle span={"col-span-2"} image={party} text={"Party"} />
            <CardStyle span={"col-span-1"} image={gym} text={"Gym"} />
          </div>
        </div>
      </div>

      {/*reviews section */}

      <div className="w-full h-80 bg-white my-16">
        <Slider/>
      </div>
    </div>
  );
};
