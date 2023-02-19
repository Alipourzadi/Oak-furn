import { createSlice } from "@reduxjs/toolkit";
import { productType, cartInitialState } from "../shared/productType";

const initialState: cartInitialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: { type?: string; payload: productType }) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id == newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          productName: newItem.productName,
          price: newItem.price,
          image: newItem.imgUrl,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart(state, action) {
      const oldItemId = action.payload;
      const existingItem = state.items.find((item) => item.id == oldItemId);
      state.totalQuantity--;
      if (existingItem!.quantity == 1) {
        state.items = state.items.filter((item) => item.id != oldItemId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
