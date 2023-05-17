import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION_ITEM } from "../../constants/stockConstants";
import { Tcard } from "../../utils/utils";

type TinitialState = {
    currentCard: Tcard,
}

const initialState: TinitialState = {
    currentCard: STOCK_COLLECTION_ITEM,
}

const cardWindowSlice = createSlice({
    name: 'cardWindowReduser',
    initialState,
    reducers: {
        setCurrentCard(state, action: PayloadAction<Tcard>) {
            state.currentCard = action.payload;
        },
    }
})

export default cardWindowSlice.reducer;

export const {setCurrentCard} = cardWindowSlice.actions;

export const getCurrentCardState = (state:{cardWindowSlice: {currentCard: Tcard}}) => state.cardWindowSlice.currentCard;