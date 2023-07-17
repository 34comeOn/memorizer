import React from "react"
import { useDispatch } from "react-redux";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { StyledEditButton } from "./styledEditButton";

export const EditButton = ({_id = ''}: {_id: string}) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_COLLECTION))
            dispatch(showModalWindow())
        }} />
    )
}