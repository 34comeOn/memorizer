import React from "react";
import { StyledLogOutNavButton } from "./styledLogOutNavButton";
import './style.scss';
import { useLogOutNavButton } from "../../../myHooks/useLogOutNavButton";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";

export const LogOutNavButton = ({userName}: {userName: string}) => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [contextHolder, openDoneNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.LOGOUT);
    const onLogOutClickHandler = useLogOutNavButton(onChangeLoadingStatus, openDoneNotification as ((descriptionText: string) => void));
    return(
        <div className="accout-name--container" >
            <span className="accout-name--title">
                {userName}
            </span>
            <CustomSpinner isLoading={isLoading} />
            <>
                {contextHolder}
            </>
            <StyledLogOutNavButton onClick={onLogOutClickHandler}>
            </StyledLogOutNavButton>
        </div>
    )
}