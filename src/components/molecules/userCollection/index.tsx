import React from "react";
import { ChooseCollectionButton } from "../../atoms/chooseCollectionButton";
import { StyledUserCollection } from "./styledUserCollection";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { checkAdminPowers, getCurrentUserEmailFromLStorage } from "../../../utils/utils";
import { DeleteCollectionButton } from "../../atoms/deleteCollectionButton";
import { EditCollectionButton } from "../../atoms/editCollectionButton";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";

type TuserCollection = {
    title: string, 
    color: string, 
    adminList: string[], 
    _id: string,
}

export const UserCollection = ({title, color, adminList, _id}: TuserCollection) => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [notificationContextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CHOOSE_COLLECTION);
    const [deleteContextHolder, openDeleteNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DELETE);
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', adminList?? []);

    return(
        <StyledUserCollection color={color}>
            {userHasAdminPowersForCollection && <EditCollectionButton _id={_id} title={title} color={color} />}
            {userHasAdminPowersForCollection && <DeleteCollectionButton 
            onChangeLoadingStatus={onChangeLoadingStatus}
            openNotification={openDeleteNotification as ((descriptionText: string) => void)
            } 
            _id={_id} />}
            <span className='collection--title'> 
                {title}
            </span>
            {isLoading && <CustomSpinner isLoading={isLoading} />}
            <>
                {notificationContextHolder}
            </>
            <>
                {deleteContextHolder}
            </>
            <ChooseCollectionButton 
            color={variables.colorMenuBright} 
            onChangeLoadingStatus={onChangeLoadingStatus} 
            openNotification={openNotification as ((descriptionText: string) => void)}
            _id={_id} >
                Choose collection
            </ChooseCollectionButton>
        </StyledUserCollection>
    )
}