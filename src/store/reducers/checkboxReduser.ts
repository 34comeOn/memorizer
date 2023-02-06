import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TinitialState = {
    areShownAll: boolean,
    filtersArr: string[],
    listItemsCategories: string[],
}

const initialState: TinitialState = {
    areShownAll: true,
    filtersArr: [],
    listItemsCategories: [],
}

const filterCheckboxSlice = createSlice({
    name: 'filterCheckboxSlice',
    initialState,
    reducers: {
        changeAll(state) {
            state.areShownAll = !state.areShownAll;
        },
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

export const {changeAll, refreshFilters, addListItemsCategories, removeListItemsCategories, updateListItemsCategories} = filterCheckboxSlice.actions;

export const getAllFilterState = (state: {filterCheckboxSlice:{areShownAll: boolean}}) => 
    state.filterCheckboxSlice.areShownAll

export const getRefreshedFiltersState = (state: {filterCheckboxSlice: {filtersArr: string[]}}) => 
    state.filterCheckboxSlice.filtersArr

export const getUpdatedlistItemsCategories = (state: {filterCheckboxSlice: {listItemsCategories: string[]}}) => 
    state.filterCheckboxSlice.listItemsCategories