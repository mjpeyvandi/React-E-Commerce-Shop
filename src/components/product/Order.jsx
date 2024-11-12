import React, { useEffect, useState } from "react";

import useProduct from "../../context/ProductContext";

import { Rating } from "../home/Rating";
import Color from "../products/Color";
import { Size } from "../products/Size";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addToCart } from "../../states/cartSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";

export const Order = () => {
  const { Product } = useProduct();
  const [Price_with_Discount, setPriceWithDiscount] = useState(0);
  const [Colors, setColors] = useState([]);
  const [Sizes, setSizes] = useState([]);
  const [selectColor, setSelectColor] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [ColortoSizeMap, setColortoSizeMap] = useState({});
  const [SizetoColorMap, setSizetoColorMap] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [availableColor, setAvailableColor] = useState([]);
  const [availableSize, setAvailableSize] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const disPatch = useDispatch();

  useEffect(() => {
    const CalculateDiscount = () => {
      if (Product && Product.discount !== 0) {
        const newPrice = Math.abs((Product.discount / 100 - 1) * Product.price);
        setPriceWithDiscount(newPrice);
      } else {
        setPriceWithDiscount(0);
      }
    };

    CalculateDiscount();
  }, [Product]);

  useEffect(() => {
    if (Product && Product.inventory) {
      const getColors_and_Size = () => {
        const ColorsMap = {};
        const SizesMap = {};

        Product.inventory.forEach((item) => {
          const color = item.ColorID.color_name;
          const size = item.SizeID.size_name;

          if (!ColorsMap[color]) {
            ColorsMap[color] = [];
          }
          ColorsMap[color].push(size);
          if (!SizesMap[size]) {
            SizesMap[size] = [];
          }
          SizesMap[size].push(color);
        });
        setColortoSizeMap(ColorsMap);
        setSizetoColorMap(SizesMap);
        setColors(Object.keys(ColorsMap));
        setSizes(Object.keys(SizesMap));
        setSelectColor(Colors[0]);
      };
      getColors_and_Size();
    } else {
      console.log("product not find");
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Product]);

  useEffect(() => {
    if (
      selectColor &&
      ColortoSizeMap &&
      Object.keys(ColortoSizeMap).length > 0
    ) {
      setAvailableSize(ColortoSizeMap[selectColor] || []);
      setSelectSize("");
    }
  }, [selectColor, ColortoSizeMap]);

  useEffect(() => {
    if (
      selectSize &&
      SizetoColorMap &&
      Object.keys(SizetoColorMap).length > 0
    ) {
      setAvailableColor(SizetoColorMap[selectSize] || []);
    }
  }, [selectSize, SizetoColorMap]);

  const notify = () =>
    selectSize
      ? toast.success("Product added to the cart", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      : toast.error("Please select a size", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      {/* details */}
      <div className="w-full h-[45%]  flex flex-col justify-between items-start gap-3 pb-3">
        <h1 className="font-titr text-4xl uppercase">{Product.product_name}</h1>
        <Rating rate_Product={Product.rate} showNumber={true} sizeStar={7} />
        <div className="w-full h-[36px] flex flex-row justify-start items-center gap-2">
          <span className="font-satoshi-b text-3xl">
            {Price_with_Discount !== 0
              ? `$${Price_with_Discount}`
              : `$${Product.price}`}
          </span>
          {Price_with_Discount !== 0 ? (
            <span className="font-satoshi-b text-gray-400 text-3xl line-through">
              ${Product.price}
            </span>
          ) : null}

          {Product.discount !== 0 ? (
            <span className="w-auto h-full p-2 flex flex-row justify-center items-center px-3 font-satoshi text-sm bg-red-100 text-red-500 rounded-3xl">
              -{Product.discount}%
            </span>
          ) : null}
        </div>
        <p className="w-[90%] font-satoshi text-black opacity-60">
          {Product.description}
        </p>
      </div>
      {/* color */}
      <div className="w-full h-[20%]  flex flex-col justify-center gap-2 items-start border-y-[0.2px] border-y-gray-300">
        <span className="font-satoshi text-black opacity-60">
          Select Colors
        </span>
        <div className="w-auto flex flex-row justify-start items-center gap-2">
          {Colors?.map((color) => {
            return (
              <Color
                value={`${color}`}
                onClick={() => setSelectColor(color)}
                checked={selectColor === color ? color : null}
                // disabled={selectSize ? availableColor.includes(color) : true}
              />
            );
          })}
        </div>
      </div>
      {/* size */}
      <div className="w-full h-[20%]  flex flex-col justify-center gap-2 items-start border-b-[0.2px] border-b-gray-300">
        <span className="font-satoshi text-black opacity-60">Select Size</span>
        <div className="w-auto h-auto flex flex-row justify-start items-center gap-2">
          {Sizes?.map((size) => {
            return (
              <Size
                value={size}
                disabled={selectColor ? availableSize.includes(size) : true}
                checked={selectSize === size ? true : false}
                onClick={() => setSelectSize(size)}
              />
            );
          })}
        </div>
      </div>
      {/* add to cart */}
      <div className="w-full h-[15%] flex flex-row justify-between items-end gap-4">
        <div className="w-1/4 h-12 rounded-3xl bg-gray-200 flex flex-row justify-between items-center align-baseline px-5">
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
          <span className="w-auto h-auto text-2xl font-satoshi">
            {quantity}
          </span>
          <button
            className="w-auto h-full text-center text-4xl font-satoshi outline-none"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <Button
          w={"w-3/4"}
          h={"h-12"}
          onClick={() => {
            notify();
            if (selectSize) {
              disPatch(
                addToCart({
                  productID: Product.id,
                  image: Product.image,
                  name: Product.product_name,
                  size: selectSize,
                  color: selectColor,
                  price:
                    Price_with_Discount > 0
                      ? Price_with_Discount
                      : Product.price,
                  quantity: quantity,
                  realPrice: Product.price,
                })
              );
            }
          }}
        >
          Add to Cart
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};
