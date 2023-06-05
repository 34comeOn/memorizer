import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { TcollectionItemData } from "../../utils/utils";

export type TgroupForRepeat = TcollectionItemData[];

type TinitialState = {
    repeatGroups: TgroupForRepeat[],
}

const getUserRepeatGroups = () => {
    const storageUserRepeatGroups = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_REPEAT_GROUPS)|| JSON.stringify([[],[],[],[],[],[],[]]));
    return storageUserRepeatGroups;
};

const initialState: TinitialState = {
    repeatGroups: getUserRepeatGroups(),
}


const collectionGroupsSlice = createSlice({
    name: 'collectionGroupsSlice',
    initialState,
    reducers: {
        setRepeatGroupsReduser(state, action: PayloadAction<TcollectionItemData[][]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_REPEAT_GROUPS, JSON.stringify(action.payload))
            state.repeatGroups = getUserRepeatGroups();
        },
        removeRepeatGroups(state) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_REPEAT_GROUPS);
            state.repeatGroups = getUserRepeatGroups();
        },
    }
})

export default collectionGroupsSlice.reducer;

export const {
    setRepeatGroupsReduser, 
    removeRepeatGroups, 
} = collectionGroupsSlice.actions;

export const getRepeatGroupsState = (state: {collectionGroupsSlice: {repeatGroups: TcollectionItemData[][]}}) =>
   state.collectionGroupsSlice.repeatGroups