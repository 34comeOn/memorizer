import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./StyledNavigation";
import { NAVIGATION_ITEMS } from "../../../constants/stockConstants";
import './style.scss';

type TnavigationItem = {
    title: string,
    path: string,
}

export const Navigation = () => {

    return (
        <StyledNavigation>
            {NAVIGATION_ITEMS.map((navigationItem: TnavigationItem, index)=> {
                return (
                    <li key={index}>
                        <NavLink className={'navItem'} to={navigationItem.path}>{navigationItem.title}</NavLink>
                    </li>
                )}
            )}
        </StyledNavigation>
    )
}
