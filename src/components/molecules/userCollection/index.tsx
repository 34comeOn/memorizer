import React from "react";
import { TrainCollectionButton } from "../../atoms/trainCollectionButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { DeleteButton } from "../../atoms/deleteButton";
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from "../../../utils/utils";

type TuserCollection = {
    title: string, 
    color: string, 
    adminList: string[], 
    collectionId: string,
}

export const UserCollection = ({title, color, adminList, collectionId}: TuserCollection) => {
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', adminList?? []);
    return(
        <StyledUserCollection color={color}>
            {userHasAdminPowersForCollection && <DeleteButton collectionId={collectionId} />}
            <span className='collection--title'> 
                {title}
            </span>
            <TrainCollectionButton path='/collection' color={variables.colorMenuBright} collectionId={collectionId} >
                Train collection
            </TrainCollectionButton>
        </StyledUserCollection>
    )
}