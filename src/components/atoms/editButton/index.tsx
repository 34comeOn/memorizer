import React from "react"
import { useDispatch } from "react-redux";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReduser";
import { StyledEditButton } from "./styledEditButton";

export const EditButton = ({collectionId = ''}: {collectionId: string}) => {
    const dispatch = useDispatch();

    return(
        <StyledEditButton onClick={()=>{
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_COLLECTION))
            dispatch(showModalWindow())
        }} />
    )
}