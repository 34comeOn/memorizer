import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import { Link } from "react-router-dom";
import './style.scss';

type TmenuButton = {
    children: string, 
    path: string, 
    color: string,
    disabled?: boolean,
}

export const MenuButton = ({children, path, color, disabled}: TmenuButton) => {
    return(
        <Link to={path} className='menu-options--link'>
            <StyledMenuButton disabled={disabled || false} color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}