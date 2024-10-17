import { createContext, useContext, useEffect, useState } from "react";
import { getProductData } from "../services/getProductData";

const ProductContext = createContext();

export function ProductContextProvider({ children, id }) {
  const [Product, setProduct] = useState([null]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = () => {
        getProductData(id).then((data) => {
          setProduct(data[0]);
          setLoading(false)
        });
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <ProductContext.Provider value={{Product, Loading}}>
      {children}
    </ProductContext.Provider>
  );
}

export default function useProduct() {
  const Product = useContext(ProductContext);

  if (Product === undefined) throw new Error("context was outside provider");

  return Product;
}
