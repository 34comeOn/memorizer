import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReduser";
import { StyledMenuButton } from "../trainCollectionButton/styledMenuButton";
import './style.scss';

type TcreateNewCollectionButton = {
    children: string, 
    color: string,
    disabled?: boolean,
}

export const CreateNewCollectionButton = ({children, color, disabled}: TcreateNewCollectionButton) => {
    const dispatch = useAppDispatch();
    return(
        <StyledMenuButton onClick={()=> {
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_COLLECTION))
            dispatch(showModalWindow())
            }} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}