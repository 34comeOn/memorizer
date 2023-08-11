import React from 'react';
import { StyledButton } from './styledButton';


export const StockButton = ({color, text, onClick, disabled} : {color: string, text: string, onClick: ()=> void, disabled?: boolean}) => {
    return (
        <StyledButton disabled={disabled} onClick={() => onClick()} color={color}>
            {text}
        </StyledButton>
    )
}