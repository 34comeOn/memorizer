import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { showModalWindow } from "../../../store/reducers/modalWindowReduser";
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
        <StyledMenuButton onClick={()=> dispatch(showModalWindow())} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}