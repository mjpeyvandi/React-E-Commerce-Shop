import React, { useEffect, useState } from "react";

import { FilterSection } from "../components/products/FilterSection";
import { Card } from "../components/products/Card";
import { ButtonPage } from "../components/products/ButtonPage";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

import { getProducts } from "../services/getProducts";
import { Button } from "../components/products/Button";

export const Products = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full h-[80rem]">
      <div className="container mx-auto h-full border-t-[0.2px] border-t-gray-300">
        <div className="h-full w-full flex flex-col justify-start items-center">
          {/* Route section */}
          <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2">
            <p className="text-gray-500">{`Home`}</p>{" "}
            <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
            <p>Products</p>
          </div>

          {/* content Section */}
          <div className="w-full h-full flex flex-row justify-between items-start gap-5">
            {/*filter section*/}
            <div className="w-[23%] h-[1140px]">
              <FilterSection />
            </div>
            {/*products section*/}
            <div className="w-[77%] h-full flex flex-col justify-start items-center">
              {/*sorting section*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <p className="font-satoshi-b text-3xl">Casual</p>
                <div className="w-2/5 flex flex-row justify-between items-center">
                  <p className="font-satoshi-l text-gray-500">{`Showing 1-10 of 100 Products`}</p>
                  <p className="font-satoshi-l text-gray-500">{`Sort by: Most Popular`}</p>
                </div>
              </div>
              {/*products*/}
              <div className="w-full h-[90%] border-b-[0.2px] border-b-gray-300">
                <div className="w-full h-full grid grid-cols-3 gap-4">
                  {Products.map((item) => (
                    <Card
                      name={item.product_name}
                      img={item.image}
                      price={item.price}
                      rate={item.rate}
                      key={item.id}
                    />
                  ))}
                </div>
              </div>
              {/*pagination*/}
              <div className="w-full h-[5%] flex flex-row justify-between items-center">
                <ButtonPage>
                  <IoIosArrowRoundBack className="size-8"/> Previous
                </ButtonPage>

                <div className="h-12 flex flex-row justify-around items-center gap-1">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                    <Button clickable={false}>...</Button>
                  <Button>8</Button>
                  <Button>9</Button>
                  <Button>10</Button>
                </div>

                <ButtonPage>
                   Next <IoIosArrowRoundForward className="size-8"/>
                </ButtonPage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
