import { useParams } from "react-router-dom";

import { ProductInfo } from "../components/product/ProductInfo";
import { TypeInfo } from "../components/product/TypeInfo";
import { SimilarProducts } from "../components/product/SimilarProducts";

import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

import { ProductContextProvider } from "../context/ProductContext";

export const Product = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-auto">
      <div className="container mx-auto w-full h-[auto] ">
        {/* show product */}
        <div className="w-full h-[78rem] sm:h-[80rem] lg:h-[42rem] xl:h-[35rem] flex flex-col justify-between items-center border-t-[0.2px] border-t-gray-300">
          <ProductContextProvider id={id}>
            {/* Route section */}
            <div className="w-full h-[5%] flex flex-row justify-start items-center font-satoshi-l gap-2 py-6">
              <p className="text-gray-500">{`Home`}</p>{" "}
              <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
              <p className="text-gray-500">Products</p>
              <MdKeyboardArrowRight className="size-5 opacity-45" />{" "}
              <p>Casual</p>
            </div>

            {/* product section */}
            <div className="w-full h-[95%] relative">
              <ProductInfo />
            </div>
          </ProductContextProvider>
        </div>
        {/* details section */}
        <div className="w-full h-auto">
          <TypeInfo />
        </div>
        {/* suggest product */}
        <ProductContextProvider id={id}>
          <div className="w-full h-auto">
            <SimilarProducts />
          </div>
        </ProductContextProvider>
      </div>
    </div>
  );
};
