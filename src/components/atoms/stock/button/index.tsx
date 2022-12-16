import React from 'react';
import { StyledButton } from './styledButton';


export const StockButton = ({color, text, onClick} : {color: string, text: string, onClick: ()=> void}) => {
    return (
        <StyledButton onClick={() => onClick()} color={color}>
            {text}
        </StyledButton>
    )
}