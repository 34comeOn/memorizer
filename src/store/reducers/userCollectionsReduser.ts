import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { Tcard } from "../../utils/utils";

type TuserCollection = {
    '_id': string,
    title: string,
    data: Tcard[],
    color?: string,
}

type TinitialState = {
    allUserCollections: TuserCollection[]
}
const getUserCollections = () => {
    const storageUserCollections = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS)?? JSON.stringify([STOCK_COLLECTION]));
    return storageUserCollections;
};

const initialState: TinitialState = {
    allUserCollections: getUserCollections(),
}


const userCollectionsSlice = createSlice({
    name: 'userCollectionsSlice',
    initialState,
    reducers: {
        setAllUserCollections(state, action: PayloadAction<TuserCollection[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS, JSON.stringify(action.payload))
            state.allUserCollections = getUserCollections();
        },
    }
})

export default userCollectionsSlice.reducer;

export const {
    setAllUserCollections, 
} = userCollectionsSlice.actions;

export const getAllUserCollectionsState = (state: {userCollectionsSlice: {allUserCollections: TuserCollection[]}}) =>
   state.userCollectionsSlice.allUserCollections