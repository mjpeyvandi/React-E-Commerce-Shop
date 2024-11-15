/* eslint-disable react/style-prop-object */
import React from "react";

import { Input } from "./Input";
import { Button } from "../components/home/Button";
import { Social } from "./Social";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MenuFooter } from "./MenuFooter";
import { PayCard } from "./PayCard";

import G from "../assets/images/G.png";
import Pay from "../assets/images/Pay.png";
import Mastercard from "../assets/images/Mastercard.png";
import Paypal from "../assets/images/Paypal.png";
import Visa from "../assets/images/Visa.png";

export const Footer = () => {
  return (
    <div className="w-full h-[60rem] sm:h-[50rem] md:h-[30rem] bg-gray-200 absolute mt-32">
      <div className="container mx-auto w-full h-full flex flex-col items-center justify-between relative bottom-24">
        {/*offer section */}
        <div className="w-full h-[25rem] sm:h-80 lg:h-48 bg-black rounded-3xl p-4 md:py-4 md:px-10 lg:py-8 lg:px-16">
          <div
            className="w-full h-full flex flex-col md:flex-row items-ce
          nter justify-between"
          >
            <p className="h-1/3 sm:h-1/2 w-full md:h-full md:w-[45%] font-titr text-white text-center sm:text-left text-xl sm:text-2xl  md:text-3xl lg:text-4xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="h-2/3 w-full md:h-full md:w-[55%] flex flex-col justify-center sm:justify-between items-center space-y-1">
              <Input
                width={"w-full lg:w-2/3"}
                height={"h-1/3 sm:h-1/2"}
                bg={"bg-white"}
                type={"email"}
                placeholder={"Enter your email address"}
              />
              <Button
                width={"w-full lg:w-2/3"}
                height={"h-1/3 sm:h-1/2"}
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
          <div className="w-full h-[90%] flex flex-col md:flex-row justify-between items-center py-6 md:py-12 border-b-[1px] border-gray-300 gap-12">
            <div className="w-full h-1/5 md:w-1/5 md:h-full flex flex-col justify-between items-start gap-5 md:gap-0">
              <div
                className="flex flex-col jus
              tify-start items-start gap-3 md:gap-8"
              >
                <span className="font-titr text-3xl cursor-pointer">
                  SHOP.CO
                </span>
                <p className="font-satoshi text-gray-500 leading-3 md:leading-5 text-sm">
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
            <div className="w-full h-4/5 md:h-full md:w-4/5 columns-2 space-y-8 md:space-y-0 md:columns-4">
              <MenuFooter
                style={"h-auto md:h-full"}
                titr={"company"}
                item1={"About"}
                item2={"Featurs"}
                item3={"Works"}
                item4={"Career"}
              />
              <MenuFooter
                style={"h-auto md:h-full"}
                titr={"help"}
                item1={"Customer Spport"}
                item2={"Delivery Details"}
                item3={"Terms & Conditions"}
                item4={"Privacy Policy"}
              />
              <MenuFooter
                style={"h-auto md:h-full"}
                titr={"faq"}
                item1={"Account"}
                item2={"Manage Deliveries"}
                item3={"Orders"}
                item4={"Payments"}
              />
              <MenuFooter
                style={"h-auto md:h-full"}
                titr={"resources"}
                item1={"Free eBooks"}
                item2={"Development Tutorial"}
                item3={"How to - Blog"}
                item4={"Youtube Playlist"}
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 pt-4 md:pt-8">
            <p className="font-satoshi text-gray-500 text-sm">
              Shop.co © 2000-2024, All Rights Reserved
            </p>
            <div className="h-full flex flex-row justify-between items-center gap-2">
              <PayCard img={Visa} />
              <PayCard img={Mastercard} />
              <PayCard img={Paypal} />
              <PayCard img={Pay} />
              <PayCard img={G} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
