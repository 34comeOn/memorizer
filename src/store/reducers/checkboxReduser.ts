import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAllQuestions: true,
    filters: []
}

const filterCheckboxSlice = createSlice({
    name: 'filterCheckboxState',
    initialState,
    reducers: {
    
    }
})