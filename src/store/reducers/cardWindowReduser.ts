import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION_ITEM } from "../../constants/stockConstants";
import { Tcard } from "../../utils/utils";

type TinitialState = {
    currentCard: Tcard,
    isAnswerVisible: boolean,
}

const initialState: TinitialState = {
    currentCard: STOCK_COLLECTION_ITEM,
    isAnswerVisible: false,
}

const cardWindowSlice = createSlice({
    name: 'cardWindowReduser',
    initialState,
    reducers: {
        setCurrentCard(state, action: PayloadAction<Tcard>) {
            state.currentCard = action.payload;
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

export const {setCurrentCard, hideAnswer, toggleAnswerVisibility} = cardWindowSlice.actions;

export const getCurrentCardState = (state:{cardWindowSlice: {currentCard: Tcard}}) => state.cardWindowSlice.currentCard;
export const getAnswerVisibilityState = (state:{cardWindowSlice: {isAnswerVisible: boolean}}) => state.cardWindowSlice.isAnswerVisible;