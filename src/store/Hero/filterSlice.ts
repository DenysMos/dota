import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type typeInitialState = {
  activeCategory: number;
};

const initialState: typeInitialState = {
  activeCategory: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
