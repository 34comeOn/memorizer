import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION} from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { TuserCollectionsData } from "../../utils/utils";

type TinitialState = {
    allUserCollections: TuserCollectionsData[]
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
        setAllUserCollections(state, action: PayloadAction<TuserCollectionsData[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS, JSON.stringify(action.payload))
            state.allUserCollections = getUserCollections();
        },
        removeAllUserCollections(state) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS);
            state.allUserCollections = getUserCollections();
        },
    }
})

export default userCollectionsSlice.reducer;

export const {
    setAllUserCollections, 
    removeAllUserCollections
} = userCollectionsSlice.actions;

export const getAllUserCollectionsState = (state: {userCollectionsSlice: {allUserCollections: TuserCollectionsData[]}}) =>
   state.userCollectionsSlice.allUserCollections