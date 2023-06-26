import { apiSlice } from "@/features/api/apiSlice";
import registerReducer from "@/features/register/registerSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
