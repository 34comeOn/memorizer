import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import { Link } from "react-router-dom";
import './style.scss';

export const MenuButton = ({children, path, color}: {children: string, path: string, color: string}) => {
    return(
        <Link to={path} className='menu-options--link'>
            <StyledMenuButton color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}