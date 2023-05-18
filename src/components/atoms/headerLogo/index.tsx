import React from "react";
import { StyledHeaderLogo } from "./styledHeaderLogo";
import './style.css';
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
    return(
        <Link to='/'> 
            <StyledHeaderLogo className="headerLogo" />
        </Link>
    )
}