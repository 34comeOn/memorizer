import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { StyledAddNewItemButton } from "./styledAddNewItemButton";

export const AddNewCollectionItemButton = () => {
    const dispatch = useAppDispatch();
    
    return(
        <StyledAddNewItemButton onClick={() => {
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_CARD));
            dispatch(showModalWindow());
        }}>
            Add new card
        </ StyledAddNewItemButton>
    )
}