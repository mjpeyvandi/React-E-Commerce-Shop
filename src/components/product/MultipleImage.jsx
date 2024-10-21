import React, { useEffect, useState } from "react";

import useProduct from "../../context/ProductContext";


export const MultipleImage = () => {
  const {Product} = useProduct();
  const [images, setImages] = useState([
    "https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/shirts/shirt-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9zaGlydHMvc2hpcnQtMi5wbmciLCJpYXQiOjE3MTIzMjAzNDksImV4cCI6MTgwNjkyODM0OX0.-Wj_qyUU8ov7OKu5RsqpEai60iyPOCoIVbBFg0lZ3vA&t=2024-04-05T12%3A32%3A28.711Z",
    "https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/shirts/shirt-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9zaGlydHMvc2hpcnQtMi5wbmciLCJpYXQiOjE3MTIzMjAzNDksImV4cCI6MTgwNjkyODM0OX0.-Wj_qyUU8ov7OKu5RsqpEai60iyPOCoIVbBFg0lZ3vA&t=2024-04-05T12%3A32%3A28.711Z",
  ]);
  const [mainPic, setMainPic] = useState(0);

  useEffect(() => {
    if (Product && Product.image && !images.includes(Product.image)) {
      setImages((preImages) => [Product.image, ...preImages]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Product]);

  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-2">
      <div className="w-[27%] h-full flex flex-col justify-between items-start gap-2">
        {images.map((image, key) => (
          <img
            src={image}
            alt="img"
            id={key}
            className={`w-full h-1/3 cursor-pointer rounded-2xl object-cover object-center overflow-hidden bg-gray-200 ${
              mainPic === key ? "border-[0.8px] border-gray-950" : ""
            }`}
            onClick={() => setMainPic(key)}
          />
        ))}
      </div>
      <div className="w-[73%] h-full">
        <img
          src={images[mainPic]}
          alt="img"
          className="w-full h-full rounded-2xl object-cover bg-gray-200"
        />
      </div>
    </div>
  );
};
