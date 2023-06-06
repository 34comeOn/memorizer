import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOCK_BASIC_COLLECTION_INFO, STOCK_COLLECTION} from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { TbasicCollectionInfo, TuserCollectionsData } from "../../utils/utils";

type TinitialState = {
    basicUserCollectionsInfo: TbasicCollectionInfo[],
    allUserCollections: TuserCollectionsData[],
    currentCollection: TuserCollectionsData,
}

const getBasicUserCollectionsInfo = () => {
    const storageUserBasicCollectionsInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO)?? JSON.stringify([STOCK_BASIC_COLLECTION_INFO]));
    return storageUserBasicCollectionsInfo;
};

const getUserCollections = () => {
    const storageUserCollections = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS)?? JSON.stringify([STOCK_COLLECTION]));
    return storageUserCollections;
};

const getCurrentUserCollection = () => {
    const storageCurrentCollection = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION)?? JSON.stringify(STOCK_COLLECTION));
    return storageCurrentCollection;
};

const initialState: TinitialState = {
    basicUserCollectionsInfo: getBasicUserCollectionsInfo(),
    allUserCollections: getUserCollections(),
    currentCollection: getCurrentUserCollection(),
}


const userCollectionsSlice = createSlice({
    name: 'userCollectionsSlice',
    initialState,
    reducers: {
        setUserBasicCollectionsInfo(state, action: PayloadAction<TbasicCollectionInfo[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO, JSON.stringify(action.payload))
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
        removeUserBasicCollectionsInfo(state) {
            localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_BASIC_COLLECTIONS_INFO);
            state.basicUserCollectionsInfo = getBasicUserCollectionsInfo();
        },
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
    setUserBasicCollectionsInfo,
    removeUserBasicCollectionsInfo,
    setAllUserCollections, 
    setCurrentCollection,
    removeAllUserCollections
} = userCollectionsSlice.actions;

export const getBasicUserCollectionsInfoSelector = (state: {userCollectionsSlice: {basicUserCollectionsInfo: TbasicCollectionInfo[]}}) =>
   state.userCollectionsSlice.basicUserCollectionsInfo;

export const getAllUserCollectionsSelector = (state: {userCollectionsSlice: {allUserCollections: TuserCollectionsData[]}}) =>
   state.userCollectionsSlice.allUserCollections;

export const getCurrentCollectionSelector = (state: {userCollectionsSlice: {currentCollection: TuserCollectionsData}}) =>
   state.userCollectionsSlice.currentCollection