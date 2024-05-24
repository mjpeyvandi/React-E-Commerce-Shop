import React from "react";

import { Input } from "./Input";
import { Button } from "../components/home/Button";
import { Social } from "./Social";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MenuFooter } from "./MenuFooter";
import {PayCard} from "./PayCard";

import G from "../assets/images/G.png"
import Pay from "../assets/images/Pay.png"
import Mastercard from "../assets/images/Mastercard.png"
import Paypal from "../assets/images/Paypal.png"
import Visa from "../assets/images/Visa.png"

export const Footer = () => {
  return (
    <div className="w-full h-[30rem] bg-gray-200 absolute mt-20">
      <div className="container mx-auto w-full h-full flex flex-col items-center justify-between relative bottom-24">
        {/*offer section */}
        <div className="w-full h-48 bg-black rounded-3xl py-8 px-16">
          <div className="w-full h-full flex flex-row items-center justify-between">
            <p className="w-[45%] font-titr text-white text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="h-full w-[55%] flex flex-col justify-between items-end space-y-1">
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

        {/*menu section */}
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className="w-full h-[90%] flex flex-row justify-between items-center py-12 border-b-[1px] border-gray-300">
            <div className="w-1/5 h-full flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-8">
                <span className="font-titr text-3xl cursor-pointer">
                  SHOP.CO
                </span>
                <p className="font-satoshi text-gray-500 leading-5 text-sm">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>

              <div className="w-full flex flex-row justify-start items-center gap-3">
                <Social>
                  <FaTwitter className="size-4" />
                </Social>
                <Social>
                  <FaFacebookF className="size-4" />
                </Social>
                <Social>
                  <FaInstagram className="size-4" />
                </Social>
                <Social>
                  <FaGithub className="size-4" />
                </Social>
              </div>
            </div>
            <MenuFooter
              titr={"company"}
              item1={"About"}
              item2={"Featurs"}
              item3={"Works"}
              item4={"Career"}
            />
            <MenuFooter
              titr={"help"}
              item1={"Customer Spport"}
              item2={"Delivery Details"}
              item3={"Terms & Conditions"}
              item4={"Privacy Policy"}
            />
            <MenuFooter
              titr={"faq"}
              item1={"Account"}
              item2={"Manage Deliveries"}
              item3={"Orders"}
              item4={"Payments"}
            />
            <MenuFooter
              titr={"resources"}
              item1={"Free eBooks"}
              item2={"Development Tutorial"}
              item3={"How to - Blog"}
              item4={"Youtube Playlist"}
            />
          </div>
          <div className="w-full h-[10%] flex flex-row justify-between items-center pt-8">
            <p className="font-satoshi text-gray-500 text-sm">
             Shop.co © 2000-2024, All Rights Reserved
            </p>
            <div className="h-full flex flex-row justify-between items-center gap-2">
              <PayCard img={Visa}/>
              <PayCard img={Mastercard}/>
              <PayCard img={Paypal}/>
              <PayCard img={Pay}/>
              <PayCard img={G}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
