import React from "react";
import { StyledRadioButtonLabel } from "./styledRadioButtonLabel";

export const RadioButtonLabel = ({htmlFor, children,checked}: {htmlFor: string,children: string, checked: boolean}) => {
    return(
        <StyledRadioButtonLabel className='form--radio-label' htmlFor={htmlFor} 
        checked={checked}
        >
        {children}
        </StyledRadioButtonLabel>
    )
}