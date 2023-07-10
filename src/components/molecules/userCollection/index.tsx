import React from "react";
import { TrainCollectionButton } from "../../atoms/trainCollectionButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from "../../../utils/utils";
import { DeleteCollectionButton } from "../../atoms/deleteCollectionButton";
import { EditCollectionButton } from "../../atoms/editCollectionButton";

type TuserCollection = {
    title: string, 
    color: string, 
    adminList: string[], 
    _id: string,
}

export const UserCollection = ({title, color, adminList, _id}: TuserCollection) => {
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', adminList?? []);
    return(
        <StyledUserCollection color={color}>
            {userHasAdminPowersForCollection && <EditCollectionButton _id={_id} title={title} color={color}/>}
            {userHasAdminPowersForCollection && <DeleteCollectionButton _id={_id} />}
            <span className='collection--title'> 
                {title}
            </span>
            <TrainCollectionButton color={variables.colorMenuBright} _id={_id} >
                Train collection
            </TrainCollectionButton>
        </StyledUserCollection>
    )
}