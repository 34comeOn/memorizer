import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION_ITEM } from "../../constants/stockConstants";
import { TcollectionItemData } from "../../utils/utils";

type TinitialState = {
    currentCard: TcollectionItemData,
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
        setCurrentCard(state, action: PayloadAction<TcollectionItemData>) {
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

export const getCurrentCardSelector = (state:{cardWindowSlice: {currentCard: TcollectionItemData}}) => state.cardWindowSlice.currentCard;
export const getCurrentCardVisibilitySelector = (state:{cardWindowSlice: {isCurrentCardVisible: boolean}}) => state.cardWindowSlice.isCurrentCardVisible;
export const getAnswerVisibilitySelector = (state:{cardWindowSlice: {isAnswerVisible: boolean}}) => state.cardWindowSlice.isAnswerVisible;