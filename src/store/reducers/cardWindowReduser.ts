import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION_ITEM } from "../../constants/stockConstants";
import { Tcard } from "../../utils/utils";

type TinitialState = {
    currentCard: Tcard,
    isCurrentCardVisible: boolean,
    isAnswerVisible: boolean,
}

const initialState: TinitialState = {
    currentCard: STOCK_COLLECTION_ITEM,
    isCurrentCardVisible: false,
    isAnswerVisible: false,
}

const cardWindowSlice = createSlice({
    name: 'cardWindowReduser',
    initialState,
    reducers: {
        setCurrentCard(state, action: PayloadAction<Tcard>) {
            state.currentCard = action.payload;
        },
        hideCurrentCard(state) {
            state.isCurrentCardVisible = false;
        },
        showCurrentCard(state) {
            state.isCurrentCardVisible = true;
        },
        hideAnswer(state) {
            state.isAnswerVisible = false;
        },
        toggleAnswerVisibility(state) {
            state.isAnswerVisible= !state.isAnswerVisible;
        }
    }
})

export default cardWindowSlice.reducer;

export const {
    setCurrentCard, 
    hideCurrentCard,
    showCurrentCard,
    hideAnswer, 
    toggleAnswerVisibility
} = cardWindowSlice.actions;

export const getCurrentCardState = (state:{cardWindowSlice: {currentCard: Tcard}}) => state.cardWindowSlice.currentCard;
export const getCurrentCardVisibilityState = (state:{cardWindowSlice: {isCurrentCardVisible: boolean}}) => state.cardWindowSlice.isCurrentCardVisible;
export const getAnswerVisibilityState = (state:{cardWindowSlice: {isAnswerVisible: boolean}}) => state.cardWindowSlice.isAnswerVisible;