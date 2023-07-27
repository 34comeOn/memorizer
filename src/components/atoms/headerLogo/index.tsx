import React from "react";
import { StyledHeaderLogo } from "./styledHeaderLogo";
import { Link } from "react-router-dom";
import './style.scss';

export const HeaderLogo = () => {
    return(
        <Link to='/'> 
            <StyledHeaderLogo className='header--logo' />
        </Link>
    )
}