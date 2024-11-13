import { createSlice } from "@reduxjs/toolkit";

const Cart = [
  {
    productID: 1,
    image: 'https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/t-shirts/t-shirt-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy90LXNoaXJ0cy90LXNoaXJ0LTEucG5nIiwiaWF0IjoxNzEyMzEyMjQ1LCJleHAiOjE3NDM4NDgyNDV9.edmhCPc20G-YM6DIpG_GM6wVsxrYLG625qXcNdrGjy4&t=2024-04-05T10%3A17%3A24.877Z',
    name: 'Gradient Graphic T-Shirt',
    size: 'Large',
    color: 'pink',
    price: 123.25,
    quantity: 2,
    realPrice: 145
  },
  {
    productID: 66,
    image: 'https://gazdnqgxpoprrmgpcmgb.supabase.co/storage/v1/object/sign/image_products/hoodis/hoodi-6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZV9wcm9kdWN0cy9ob29kaXMvaG9vZGktNi5wbmciLCJpYXQiOjE3MTIzMjEwMjAsImV4cCI6MTgwNjkyOTAyMH0.chtXaAb6e6kiYcICdw0NfPniKaxvsi0d-j-V2h9ubqc&t=2024-04-05T12%3A43%3A39.411Z',
    name: 'Gradient Graphic T-Shirt',
    size: 'X-Small',
    color: 'yellow',
    price: 69,
    quantity: 1,
    realPrice: 69
  }
];

export const cartSlice = createSlice({
  name: "cart",
  initialState: Cart,
  reducers: {
    addToCart: (state, action) => {
      const Product = state.find(
        (item) =>
          item.productID === action.payload.productID &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (Product) {
        Product.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
