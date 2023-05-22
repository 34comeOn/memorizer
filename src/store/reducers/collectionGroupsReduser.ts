import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tcard } from "../../utils/utils";

export type TgroupForRepeat = Tcard[];

type TinitialState = {
    repeatGroups: TgroupForRepeat[],
}

const initialState: TinitialState = {
    repeatGroups: [[],[],[],[],[],[],[]],
}

const collectionGroupsSlice = createSlice({
    name: 'collectionGroupsSlice',
    initialState,
    reducers: {
        repeatGroupsReduser(state, action: PayloadAction<Tcard[][]>) {
            state.repeatGroups = action.payload
        },
    }
})

export default collectionGroupsSlice.reducer;

export const {
    repeatGroupsReduser, 
} = collectionGroupsSlice.actions;

export const getRepeatGroupsState = (state: {collectionGroupsSlice: {repeatGroups: Tcard[][]}}) =>
   state.collectionGroupsSlice.repeatGroups