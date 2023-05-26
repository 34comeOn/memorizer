import React from "react";
import { Link } from "react-router-dom";
import { StyledMenuButton } from "../trainCollectionButton/styledMenuButton";
import './style.scss';

type TcreateNewCollectionButton = {
    children: string, 
    path: string, 
    color: string,
    disabled?: boolean,
}

export const CreateNewCollectionButton = ({children, path, color, disabled}: TcreateNewCollectionButton) => {
    return(
        <Link to={path} className='menu-options--link'>
            <StyledMenuButton disabled={disabled || false} color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}