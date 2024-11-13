import React, { useEffect, useState } from "react";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

import { Items } from "../components/cart/Items";
import { OrderSummary } from "../components/cart/OrderSummary";
import { useSelector } from "react-redux";

export const Cart = () => {
  const [cartItems, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const cart_items = useSelector((state) => state.cart);
  useEffect(() => {
    const itemsHandler = () => {
      let sub_total = 0
      let price_with_discount = 0
      if (cart_items) {
        setItems(cart_items);
        cartItems.forEach((item)=>(
          // eslint-disable-next-line no-sequences
          sub_total += item.realPrice * item.quantity,
          price_with_discount += item.price * item.quantity
        ));
         setSubtotal(sub_total)
         setDiscount(sub_total - price_with_discount)
      }}
        
    itemsHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems, cart_items]);

console.log(discount)
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto w-full h-auto border-t-[0.2px] border-t-gray-300">
        {/* route section */}
        <div className="w-full h-[48px] flex flex-row justify-start items-center font-satoshi-l gap-2 py-6">
          <p className="text-gray-500">{`Home`}</p>{" "}
          <MdKeyboardArrowRight className="size-5 opacity-45" /> <p>Order</p>
        </div>
        {/* titr section */}
        <div className="w-full h-auto py-4">
          <h2 className="font-titr text-4xl h-1/6">Your cart</h2>
        </div>
        {/* cart section */}
        <div className="w-full h-auto grid grid-cols-5 gap-3 ">
          <div className="w-full h-min col-span-3 flex flex-col justify-start items-center gap-12 border-[0.2px] border-gray-300 rounded-2xl p-6">
            {cartItems?.map((item) => (
              <Items
                image={item.image}
                name={item.name}
                size={item.size}
                color={item.color}
                realPrice={item.realPrice}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="w-full h-[27rem] col-span-2 border-[0.2px] border-gray-300 rounded-2xl py-6 px-5">
            <OrderSummary subtotal={subtotal} discountPrice={discount} />
          </div>
        </div>
      </div>
    </div>
  );
};
