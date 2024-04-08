import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
console.log(counterSlice);

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
