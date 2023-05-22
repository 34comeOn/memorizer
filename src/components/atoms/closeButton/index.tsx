import React from "react";
import { StyledCloseButton } from "./styledCloseButton";
import './style.scss';
import { useCloseClickButton } from "../../../myHooks/useCloseClickButton";

export const CloseButton = () => {
    const closeCardWindow = useCloseClickButton();

    return(
        <StyledCloseButton onClick={closeCardWindow} className='close-button' />
    )
}