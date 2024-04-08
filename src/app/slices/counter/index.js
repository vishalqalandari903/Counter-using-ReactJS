import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("count")) || 0;
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increamentCount: (state) => state + 1,
    decreamentCount: (state) => state - 1,
    resetCount: (state) => 0,
  },
});

// Action creators are generated for each case reducer function
export const { increamentCount, decreamentCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
