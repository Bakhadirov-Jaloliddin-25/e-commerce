import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { cartSlice } from "./features/cart-slice";
import wishlist from "./features/wishlist-slice";
import tokenSlice from "./features/token-slice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    cart: cartSlice.reducer,
    wishlist,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
