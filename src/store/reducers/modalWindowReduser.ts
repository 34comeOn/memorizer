import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

type TmodalWindowState = {
    isModalShown: boolean;
    modalInnerComponent: ReactElement | string;
};

const initialState: TmodalWindowState = {
  isModalShown: false,
  modalInnerComponent: 'no content still',
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
    setContentForModalWindow(state, action: PayloadAction<ReactElement>) {
      state.modalInnerComponent = action.payload;
    },
    removeContentFromModalWindow(state) {
      state.modalInnerComponent = 'content removed';
    },
  }
});

export default modalWindowSlice.reducer;

export const { showModalWindow, hideModalWindow, setContentForModalWindow,  removeContentFromModalWindow} = modalWindowSlice.actions;

export const getModalWindowViewState = (state: { modalWindowSlice: { isModalShown: boolean } }) =>
  state.modalWindowSlice.isModalShown;
export const getModalWindowContent = (state: { modalWindowSlice: { modalInnerComponent: ReactElement | string } }) =>
  state.modalWindowSlice.modalInnerComponent;
