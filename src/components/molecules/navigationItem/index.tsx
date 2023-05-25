import React from "react";
import { NavLink } from "react-router-dom";
import { TnavigationItem } from "../../../constants/stockConstants";
import { StyledNavigationItem } from "./styledNavigationItem";

export const NavigationItem = ({navigationItem}: {navigationItem: TnavigationItem}) => {
    return(
        <StyledNavigationItem>
            <NavLink className={'navItem'} to={navigationItem.path}>
                {navigationItem.title}
            </NavLink>
        </ StyledNavigationItem>
    )
}