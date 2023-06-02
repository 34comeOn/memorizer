import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TmodalWindowState = {
    isModalShown: boolean;
    modalInnerComponentTitle: string;
};

const initialState: TmodalWindowState = {
  isModalShown: false,
  modalInnerComponentTitle: 'no content still',
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
    setContentForModalWindow(state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.modalInnerComponentTitle = action.payload;
    },
    removeContentFromModalWindow(state) {
      state.modalInnerComponentTitle = 'content removed';
    },
  }
});

export default modalWindowSlice.reducer;

export const { showModalWindow, hideModalWindow, setContentForModalWindow,  removeContentFromModalWindow} = modalWindowSlice.actions;

export const getModalWindowViewState = (state: { modalWindowSlice: { isModalShown: boolean } }) =>
  state.modalWindowSlice.isModalShown;
export const getModalWindowContentTitle = (state: { modalWindowSlice: { modalInnerComponentTitle: string } }) =>
  state.modalWindowSlice.modalInnerComponentTitle;
