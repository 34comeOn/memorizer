import React from "react";
import { StyledNavigation } from "./StyledNavigation";
import { NAVIGATION_ITEMS } from "../../../constants/stockConstants";
import './style.scss';
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReduser";
import { TnavigationItem } from "../../../constants/stockConstants";
import { NavigationItem } from "../navigationItem";

export const Navigation = () => {
    const hasLoged = useAppSelector(getAccountStatusSelector);
    return (
        <StyledNavigation>
            {NAVIGATION_ITEMS.map((navigationItem: TnavigationItem, index)=> {
                return (
                    (navigationItem.visibleWhenUserLoggedIn === hasLoged || !navigationItem.loggedStatusDependent) && 
                    <NavigationItem key={index} navigationItem={navigationItem} />
                )}
            )}
        </StyledNavigation>
    )
}
