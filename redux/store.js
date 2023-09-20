// store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import stockDataReducer from "./slice/stockDataSlice";
const middleware = getDefaultMiddleware({
  serializableCheck: false, // Disable serializability check
});
const store = configureStore({
  reducer: {
    stockData: stockDataReducer,
    middleware,
  },
});

export default store;
