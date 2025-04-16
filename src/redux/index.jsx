import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import shoppingSlice from "./ShoppingSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    shopping: shoppingSlice,
  },
});

export default store;
