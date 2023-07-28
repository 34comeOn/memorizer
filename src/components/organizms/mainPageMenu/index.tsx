import React from "react";
import { UserCollectionsList } from "../userCollectionsList";
import { StyledMainPageMenu } from "./styledMainPageMenu";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { useAppSelector } from "../../../app/hooks";
import { CreateNewCollectionButton } from "../../atoms/createNewCollectionButton";

export const MainPageMenu = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    return(
        <StyledMainPageMenu className='menu-options--box' >
                    <CreateNewCollectionButton disabled={!accountStatus} color={variables.colorDecorBright}>
                        Create a new collection
                    </ CreateNewCollectionButton>
                <UserCollectionsList />
        </ StyledMainPageMenu>
    )
}