import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeditState = {
    editCollection: {_id: string, title: string, color: string};
};

export type TeditCollection = {
    _id: string,
  title: string,
  color: string,
}

const initialState: TeditState = {
    editCollection: {_id: '', title: '', color: ''}
};

const editSlice = createSlice({
  name: 'editState',
  initialState,
  reducers: {
    editCollection(state, action: PayloadAction<TeditCollection>) {
      state.editCollection = {
        _id:action.payload._id, 
        title: action.payload.title, 
        color: action.payload.color
      };
    },
  }
});

export default editSlice.reducer;

export const { editCollection } = editSlice.actions;

export const getEditCollectionSelector = (state: { editSlice: { editCollection: TeditCollection } }) =>
  state.editSlice.editCollection;
