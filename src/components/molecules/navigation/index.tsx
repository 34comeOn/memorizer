import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./StyledNavigation";
import './style.css';

export const Navigation = () => {
    const navArray: string[] = ['About', 'Settings', 'Profile', 'Contact']

    return (
        <StyledNavigation>
            {navArray.map((navigationItem: string, index)=> {
                return (
                    <li key={index}>
                        <NavLink className={'navItem'} to={""}>{navigationItem}</NavLink>
                    </li>
                )}
            )}
        </StyledNavigation>
    )
}
