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
    deleteItem: (state, action) => {
      const cart = state.filter(
        (item) =>
          !(
            item.productID === action.payload.productID &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
      );
      return cart;
    },
    Increase: (state, action) => {
      const Product = state.find(
        (item) =>
          item.productID === action.payload.productID &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (Product) {
        Product.quantity += 1;
      }
    },

    Decrease: (state, action) => {
      const Product = state.find(
        (item) =>
          item.productID === action.payload.productID &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (Product && Product.quantity > 1) {
        Product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteItem, Increase, Decrease } = cartSlice.actions;
export default cartSlice.reducer;
