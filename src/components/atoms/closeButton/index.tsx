import React from "react";
import { StyledCloseButton } from "./styledCloseButton";
import './style.scss';

export const CloseButton = ({onClick}:{onClick: ()=> void}) => {
    return(
        <StyledCloseButton onClick={onClick} className='close-button' />
    )
}