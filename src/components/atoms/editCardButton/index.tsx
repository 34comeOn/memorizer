import React from "react"
import { useDispatch } from "react-redux";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { editCard, TeditCard } from "../../../store/reducers/editReducer";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { StyledEditButton } from "../editButton/styledEditButton";

export const EditCardButton = ({_id, cardTitle, cardAnswer, cardCategory, cardColor}: TeditCard) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(editCard({_id, cardTitle, cardAnswer, cardCategory, cardColor}))
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_CARD))
            dispatch(showModalWindow())
        }} />
    )
}