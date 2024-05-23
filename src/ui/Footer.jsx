import React from "react";
import { Input } from "./Input";
import { Button } from "../components/home/Button";

export const Footer = () => {
  return (
    <div className="w-full h-[30rem] bg-gray-200 absolute mt-20">
      <div className="container mx-auto w-full h-full flex flex-col items-center justify-between relative bottom-24">
        <div className="w-full h-48 bg-black rounded-3xl py-8 px-16">
          <div className="w-full h-full flex flex-row items-center justify-between">
            <p className="w-[45%] font-titr text-white text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="h-full w-[55%] flex flex-col justify-between items-end gap-4">
              <Input
                width={"w-2/3"}
                height={"h-1/2"}
                bg={"bg-white"}
                type={"email"}
                placeholder={"Enter your email address"}
              />
              <Button
                width={"w-2/3"}
                height={"h-1/2"}
                bg={"bg-white"}
                textColor={"text-black"}
                font={"font-satoshi-b"}
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
