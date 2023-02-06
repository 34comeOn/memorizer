import React from "react";
import { StyledHeader } from "./styledHeader";
import { HeaderLogo } from "../../atoms/headerLogo";
import { Navigation } from "../../molecules/navigation";

export const Header = () => {
    return(
        <StyledHeader>
            <HeaderLogo />
            <Navigation />
        </StyledHeader>
    )
}