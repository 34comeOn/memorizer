import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tcard } from "../../utils/utils";

type TinitialState = {
    repeatNowGroup: Tcard[][],
}

const initialState: TinitialState = {
    repeatNowGroup: [[],[],[],[],[],[],[]],
}

const collectionGroupsSlice = createSlice({
    name: 'collectionGroupsSlice',
    initialState,
    reducers: {
        repeatNowGroupReduser(state, action: PayloadAction<Tcard[][]>) {
            state.repeatNowGroup = action.payload
        },
    }
})

export default collectionGroupsSlice.reducer;

export const {
repeatNowGroupReduser, 
} = collectionGroupsSlice.actions;

export const getRepeatNowGroupState = (state: {collectionGroupsSlice: {repeatNowGroup: Tcard[][]}}) =>
   state.collectionGroupsSlice.repeatNowGroup