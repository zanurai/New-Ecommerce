import { configureStore } from "@reduxjs/toolkit";
import productslice from "./auth/productslice";
import authslice from "./auth/authslice";
import cartslice from "./auth/cartslice";

export const store = configureStore({
  reducer: {
    products: productslice,
    auth: authslice,
    cart: cartslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
