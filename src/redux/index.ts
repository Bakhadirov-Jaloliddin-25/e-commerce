import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { cartSlice } from "./features/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
