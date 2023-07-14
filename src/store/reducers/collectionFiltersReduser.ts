import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS_CONSTANTS, MAIN_FILTER_CHECKBOX } from "../../constants/stringConstants";

const getFiltersList = () => {
    const storageFiltersList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.FILTERS_LIST)|| JSON.stringify([]));
    return storageFiltersList;
};

type TinitialState = {
    filtersList: string[],
    listOfCurrentFilters: string[],
}

const initialState: TinitialState = {
    filtersList: getFiltersList(),
    listOfCurrentFilters: [MAIN_FILTER_CHECKBOX],
}

const collectionFiltersSlice = createSlice({
    name: 'collectionFiltersSlice',
    initialState,
    reducers: {
        setFiltersList(state, action: PayloadAction<string[]>) {
            localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.FILTERS_LIST, JSON.stringify(action.payload))
            state.filtersList = getFiltersList();
        },
        replaceListOfCurrentFilters(state, action: PayloadAction<string[]>) {
            state.listOfCurrentFilters = action.payload;
        },
        addItemInListOfCurrentFilters(state, action: PayloadAction<string>) {
            state.listOfCurrentFilters.push(action.payload);
        },
        removeItemFromListOfCurrentFilters(state, action: PayloadAction<string>) {
            state.listOfCurrentFilters.splice(state.listOfCurrentFilters.findIndex((element)=> element === action.payload),1)
        },
    }
})

export default collectionFiltersSlice.reducer;

export const {
    setFiltersList, 
    replaceListOfCurrentFilters, 
    addItemInListOfCurrentFilters,
    removeItemFromListOfCurrentFilters
} = collectionFiltersSlice.actions;

export const getRefreshedFiltersSelector = (state: {collectionFiltersSlice: {filtersList: string[]}}) => 
    state.collectionFiltersSlice.filtersList

export const getListOfCurrentFiltersSelector = (state: {collectionFiltersSlice: {listOfCurrentFilters: string[]}}) => 
    state.collectionFiltersSlice.listOfCurrentFilters