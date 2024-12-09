import React from "react";

import { Card } from "./Card";
import { Button } from "./Button";
import { BarLoader } from "react-spinners";

export const PreviewSection = ({ titr, products, border }) => {
  return (
    <div className="w-full h-[35rem] sm:h-[42rem] md:h-auto bg-white relative">
      <div className={`w-full h-full mx-auto container ${border}`}>
        <div className="w-full h-full flex flex-col justify-between items-center gap-5 py-14">
          <h2 className="font-titr text-3xl sm:text-5xl h-1/6">{titr}</h2>
          {/*product card */}

          {!products ? (
            <BarLoader  color="#000000" size={30} />
          ) : (
            <div className="w-full h-5/6 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible scrollbar-hidden">
              {products.map((item) => (
                <Card
                  img={item.image}
                  name={item.product_name}
                  rate={item.rate}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </div>
          )}

          <div className="w-full flex flex-row justify-center items-center mt-3">
            <Button
              bg={"bg-white"}
              textColor={"text-black"}
              border={"border-gray-300"}
              width={"w-48"}
              height={"h-12"}
              font={"font-satoshi"}
            >
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
