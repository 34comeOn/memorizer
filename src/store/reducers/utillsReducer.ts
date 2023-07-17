import { createSlice } from '@reduxjs/toolkit';

type TutillsState = {
    isSpinnerShown: boolean;
};

const initialState: TutillsState = {
  isSpinnerShown: false,
};

const utillsSlice = createSlice({
  name: 'utills',
  initialState,
  reducers: {
    showSpinner(state) {
      state.isSpinnerShown = true;
    },
    hideSpinner(state) {
      state.isSpinnerShown = false;
    },
  }
});

export default utillsSlice.reducer;

export const { showSpinner, hideSpinner} = utillsSlice.actions;

export const getSpinnerStateSelector = (state: { utillsSlice: { isSpinnerShown: boolean } }) =>
  state.utillsSlice.isSpinnerShown;