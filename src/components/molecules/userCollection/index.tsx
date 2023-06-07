import React from "react";
import { TrainCollectionButton } from "../../atoms/trainCollectionButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { DeleteButton } from "../../atoms/deleteButton";
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from "../../../utils/utils";
import { EditButton } from "../../atoms/editButton";

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
            {userHasAdminPowersForCollection && <EditButton _id={_id} />}
            {userHasAdminPowersForCollection && <DeleteButton _id={_id} />}
            <span className='collection--title'> 
                {title}
            </span>
            <TrainCollectionButton path='/collection' color={variables.colorMenuBright} _id={_id} >
                Train collection
            </TrainCollectionButton>
        </StyledUserCollection>
    )
}