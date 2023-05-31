import { createSlice } from '@reduxjs/toolkit';

type TmodalWindowState = {
    isModalShown: boolean;
};

const initialState: TmodalWindowState = {
  isModalShown: false,
};

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    showModalWindow(state) {
      state.isModalShown = true;
    },
    hideModalWindow(state) {
      state.isModalShown = false;
    },
  }
});

export default modalWindowSlice.reducer;

export const { showModalWindow, hideModalWindow } = modalWindowSlice.actions;

export const getModalWindowViewState = (state: { modalWindowSlice: { isModalShown: boolean } }) =>
  state.modalWindowSlice.isModalShown;
