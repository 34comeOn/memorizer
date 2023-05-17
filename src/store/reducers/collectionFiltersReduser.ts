import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAIN_FILTER_CHECKBOX } from "../../constants/stringConstants";

type TinitialState = {
    filtersList: string[],
    listOfCurrentFilters: string[],
}

const initialState: TinitialState = {
    filtersList: [],
    listOfCurrentFilters: [MAIN_FILTER_CHECKBOX],
}

const collectionFiltersSlice = createSlice({
    name: 'collectionFiltersSlice',
    initialState,
    reducers: {
        setFiltersList(state, action: PayloadAction<string[]>) {
            state.filtersList = action.payload;
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

export const getRefreshedFiltersState = (state: {collectionFiltersSlice: {filtersList: string[]}}) => 
    state.collectionFiltersSlice.filtersList

export const getUpdatedlistItemsCategories = (state: {collectionFiltersSlice: {listOfCurrentFilters: string[]}}) => 
    state.collectionFiltersSlice.listOfCurrentFilters