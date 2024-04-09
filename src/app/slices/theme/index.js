import { createSlice } from "@reduxjs/toolkit";

const initialState = "dark";
export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    darkMode: () => {
      return "dark";
    },
    lightMode: () => "light",
  },
});

export default themeModeSlice.reducer;
export const { darkMode, lightMode } = themeModeSlice.actions;
