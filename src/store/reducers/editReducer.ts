import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TeditCollection = {
    _id: string,
    title: string,
    color: string,
}

export type TeditCard = {
    _id: string,
    cardTitle: string,
    cardAnswer: string,
    cardCategory: string,
    cardColor: string,
}

type TeditState = {
    editCollection: TeditCollection;
    editCard: TeditCard,
};
const initialState: TeditState = {
    editCollection: {
        _id: '', 
        title: '', 
        color: ''
    },
    editCard: {
        _id: '', 
        cardTitle: '',
        cardAnswer: '',
        cardCategory: '',
        cardColor: '',
    },
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
    editCard(state, action: PayloadAction<TeditCard>) {
      state.editCard = {
        _id: action.payload._id, 
        cardTitle: action.payload.cardTitle,
        cardAnswer: action.payload.cardAnswer,
        cardCategory: action.payload.cardCategory,
        cardColor: action.payload.cardColor,
      };
    },
  }
});

export default editSlice.reducer;

export const { editCollection, editCard } = editSlice.actions;

export const getEditCollectionSelector = (state: { editSlice: { editCollection: TeditCollection } }) =>
  state.editSlice.editCollection;

export const getEditCardSelector = (state: { editSlice: { editCard: TeditCard } }) =>
  state.editSlice.editCard;
