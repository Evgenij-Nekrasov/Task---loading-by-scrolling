import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "@/shared/api/Request";

const rootReducer = combineReducers({
   [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(postApi.middleware),
      devTools: process.env.NODE_ENV !== "production",
   });
};
