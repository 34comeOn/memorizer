import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReduser";
import { NewCollectionForm } from "../../organizms/newCollectionForm";
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
            dispatch(setContentForModalWindow(<NewCollectionForm />))
            dispatch(showModalWindow())
            }} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}