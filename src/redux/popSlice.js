import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
  success: false,
};

export const popSlice = createSlice({
  name: 'pop',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    formStatus: (state) => {
      state.success = !state.success;
    },
  },
});

export const { toggle, formStatus } = popSlice.actions;

export const popReducer = popSlice.reducer;
