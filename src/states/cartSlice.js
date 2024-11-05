import { createSlice } from "@reduxjs/toolkit";

const Cart = [];

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
