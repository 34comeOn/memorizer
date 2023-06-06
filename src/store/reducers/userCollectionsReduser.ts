import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_COLLECTION} from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { TuserCollectionsData } from "../../utils/utils";

type TinitialState = {
    allUserCollections: TuserCollectionsData[],
    currentCollection: TuserCollectionsData,
}

const getUserCollections = () => {
    const storageUserCollections = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS)?? JSON.stringify([STOCK_COLLECTION]));
    return storageUserCollections;
};
const getCurrentUserCollection = () => {
    const storageCurrentCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION)?? JSON.stringify(STOCK_COLLECTION));
    return storageCurrentCollection;
};

const initialState: TinitialState = {
    allUserCollections: getUserCollections(),
    currentCollection: getCurrentUserCollection(),
}


const userCollectionsSlice = createSlice({
    name: 'userCollectionsSlice',
    initialState,
    reducers: {
        setAllUserCollections(state, action: PayloadAction<TuserCollectionsData[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS, JSON.stringify(action.payload))
            state.allUserCollections = getUserCollections();
        },
        setCurrentCollection(state, action: PayloadAction<TuserCollectionsData>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION, JSON.stringify(action.payload))
            state.currentCollection = getCurrentUserCollection();
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
    setCurrentCollection,
    removeAllUserCollections
} = userCollectionsSlice.actions;

export const getAllUserCollectionsState = (state: {userCollectionsSlice: {allUserCollections: TuserCollectionsData[]}}) =>
   state.userCollectionsSlice.allUserCollections;

export const getCurrentCollectionState = (state: {userCollectionsSlice: {currentCollection: TuserCollectionsData}}) =>
   state.userCollectionsSlice.currentCollection