/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    updateCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { updateCounter } = counter.actions;

export const selectCounter = (state) => state.counter.count;

export default counter.reducer;
