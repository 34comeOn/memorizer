import React from "react";
import { MenuButton } from "../../atoms/menuButton";
import { UserCollectionsList } from "../userCollectionsList";
import { StyledMainPageMenu } from "./styledMainPageMenu";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { getAccountStatus } from "../../../store/reducers/accountReduser";
import { useAppSelector } from "../../../app/hooks";
import { CreateNewCollectionButton } from "../../atoms/createNewCollectionButton";

export const MainPageMenu = () => {
    const accountStatus = useAppSelector(getAccountStatus);
    return(
        <StyledMainPageMenu className='menu-options--box' >
                <UserCollectionsList />
                <MenuButton disabled={!accountStatus} path='/new_collection' color={variables.colorMenuDark}>
                    Create a new collection
                </MenuButton>
                <CreateNewCollectionButton disabled={!accountStatus} path='/new_collection' color={variables.colorMenuDark}>
                    Create a new collection
                </ CreateNewCollectionButton>
        </ StyledMainPageMenu>
    )
}