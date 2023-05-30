import React from "react";
import { StyledLogOutNavButton } from "./styledLogOutNavButton";
import './style.scss';
import { useLogOutNavButton } from "../../../myHooks/useLogOutNavButton";

export const LogOutNavButton = ({userName}: {userName: string}) => {
    const onLogOutClickHandler = useLogOutNavButton();
    return(
        <div className="accout-name--container" >
            <span className="accout-name--title">
                {userName}
            </span>
            <StyledLogOutNavButton onClick={onLogOutClickHandler}>
            </StyledLogOutNavButton>
        </div>
    )
}