import React from "react"
import { useDispatch } from "react-redux";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { editCollection, IeditCollection } from "../../../store/reducers/editReducer";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { StyledEditButton } from "../editButton/styledEditButton";

export const EditCollectionButton = ({_id, color, title}: IeditCollection) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(editCollection({_id, color, title}))
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_COLLECTION))
            dispatch(showModalWindow())
        }} />
    )
}