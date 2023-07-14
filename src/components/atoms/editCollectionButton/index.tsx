import React from "react"
import { useDispatch } from "react-redux";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { editCollection, TeditCollection } from "../../../store/reducers/editReduser";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReduser";
import { StyledEditButton } from "../editButton/styledEditButton";

export const EditCollectionButton = ({_id, color, title}: TeditCollection) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(editCollection({_id, color, title}))
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_COLLECTION))
            dispatch(showModalWindow())
        }} />
    )
}