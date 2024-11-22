import React, { useEffect, useState } from "react";
import useProduct from "../../context/ProductContext";

import { getSimilarProducts } from "../../services/getSimilarProducts";
import { Card } from "../products/Card";
import { Link } from "react-router-dom";

export const SimilarProducts = () => {
  const { Product } = useProduct();
  const [SuggestedProducts, setSuggestedProducts] = useState([]);
  useEffect(() => {
    const fetchSimilarProduct = async () => {
      if (Product) {
        const SimilarProducts = await getSimilarProducts(Product.category_id);
        if (SimilarProducts) {
          setSuggestedProducts(SimilarProducts);
        }
      }
    };
    fetchSimilarProduct();
  }, [Product]);
  return (
    <div className="w-full h-auto flex flex-col justify-between items-center gap-6 pt-14">
      <h2 className="font-titr text-2xl xs:text-3xl sm:text-5xl h-1/6">You might also like</h2>
      <div className="w-full h-auto  flex xs:grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-2 overflow-x-auto scrollbar-hidden">
        {SuggestedProducts.map((product) => (
          <Link
            to={`/products/product/${product.product_name}/${product.id}`}
          >
            <Card
              img={product.image}
              name={product.product_name}
              price={product.price}
              rate={product.rate}
              key={product.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
