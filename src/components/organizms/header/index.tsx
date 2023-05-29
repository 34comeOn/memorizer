import React from "react";
import { StyledHeader } from "./styledHeader";
import { HeaderLogo } from "../../atoms/headerLogo";
import { Navigation } from "../../molecules/navigation";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatus, getAccountUserName } from "../../../store/reducers/accountReduser";
import { LogOutNavButton } from "../../molecules/logOutNavButton";

export const Header = () => {
    const hasLoged = useAppSelector(getAccountStatus);
    const userName = useAppSelector(getAccountUserName);

    return(
        <StyledHeader>
            <HeaderLogo />
            {hasLoged && <LogOutNavButton userName={userName}/>}
            <Navigation />
        </StyledHeader>
    )
}