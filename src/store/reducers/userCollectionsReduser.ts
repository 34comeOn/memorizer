import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { Tcard } from "../../utils/utils";

type TuserCollection = {
    '_id': string,
    title: string,
    isResentCollection: boolean,
    data: Tcard[],
}

type TinitialState = {
    allUserCollections: TuserCollection[]
}

const initialState: TinitialState = {
    allUserCollections: [STOCK_COLLECTION],
}

const userCollectionsSlice = createSlice({
    name: 'userCollectionsSlice',
    initialState,
    reducers: {
        setAllUserCollections(state, action: PayloadAction<TuserCollection[]>) {
            state.allUserCollections = action.payload;
        },
    }
})

export default userCollectionsSlice.reducer;

export const {
    setAllUserCollections, 
} = userCollectionsSlice.actions;

export const getAllUserCollectionsState = (state: {userCollectionsSlice: {allUserCollections: TuserCollection[]}}) =>
   state.userCollectionsSlice.allUserCollections