import React, { useState } from "react";

import img1 from "../../assets/images/image 1.png";
import img2 from "../../assets/images/image 7.png";

export const MultipleImage = () => {
  const [images, setImages] = useState([
    "https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/t-shirts/t-shirt-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy90LXNoaXJ0cy90LXNoaXJ0LTEucG5nIiwiaWF0IjoxNzEyMzEyMjQ1LCJleHAiOjE3NDM4NDgyNDV9.edmhCPc20G-YM6DIpG_GM6wVsxrYLG625qXcNdrGjy4&t=2024-04-05T10%3A17%3A24.877Z",
    "https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/hoodis/hoodi-7.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9ob29kaXMvaG9vZGktNy5wbmciLCJpYXQiOjE3MTIzMjEwMzUsImV4cCI6MTgwNjkyOTAzNX0.hU_jbBRg9Fc9MqbqJyE3TbOLB_eFYWi04VWGOm3v3t8&t=2024-04-05T12%3A43%3A54.703Z",
    "https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/shirts/shirt-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9zaGlydHMvc2hpcnQtMi5wbmciLCJpYXQiOjE3MTIzMjAzNDksImV4cCI6MTgwNjkyODM0OX0.-Wj_qyUU8ov7OKu5RsqpEai60iyPOCoIVbBFg0lZ3vA&t=2024-04-05T12%3A32%3A28.711Z"
  ])
  const [mainPic, setMainPic] = useState(0)
  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-2">
      <div className="w-[27%] h-full flex flex-col justify-between items-start gap-2 bg-red-300">
        {images.map((image, key) => (
          <img
            src={image}
            alt="img"
            id={key}
            className={`w-full h-1/3 cursor-pointer rounded-2xl object-cover object-center overflow-hidden bg-gray-200 ${mainPic === key ? 'border-[0.8px] border-gray-950' : ''}`}
            onClick={()=> setMainPic(key)}
          />
        ))}
      </div>
      <div className="w-[73%] h-full">
        <img src={images[mainPic]} alt="img" className="w-full h-full rounded-2xl object-cover bg-gray-200" />
      </div>
    </div>
  );
};
