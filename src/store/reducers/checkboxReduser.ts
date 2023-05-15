import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAIN_FILTER_CHECKBOX } from "../../constants/stringConstants";

type TinitialState = {
    filtersArr: string[],
    listItemsCategories: string[],
}

const initialState: TinitialState = {
    filtersArr: [],
    listItemsCategories: [MAIN_FILTER_CHECKBOX],
}

const filterCheckboxSlice = createSlice({
    name: 'filterCheckboxSlice',
    initialState,
    reducers: {
        refreshFilters(state, action: PayloadAction<string[]>) {
            state.filtersArr = action.payload;
        },
        updateListItemsCategories(state, action: PayloadAction<string[]>) {
            state.listItemsCategories = action.payload;
        },
        addListItemsCategories(state, action: PayloadAction<string>) {
            state.listItemsCategories.push(action.payload);
        },
        removeListItemsCategories(state, action: PayloadAction<string>) {
            state.listItemsCategories.splice(state.listItemsCategories.findIndex((element)=> element === action.payload),1)
        },
    }
})

export default filterCheckboxSlice.reducer;

export const {
    refreshFilters, 
    addListItemsCategories, 
    removeListItemsCategories,
    updateListItemsCategories
} = filterCheckboxSlice.actions;

export const getRefreshedFiltersState = (state: {filterCheckboxSlice: {filtersArr: string[]}}) => 
    state.filterCheckboxSlice.filtersArr

export const getUpdatedlistItemsCategories = (state: {filterCheckboxSlice: {listItemsCategories: string[]}}) => 
    state.filterCheckboxSlice.listItemsCategories