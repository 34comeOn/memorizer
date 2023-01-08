import React from 'react';
import { StyledAnswer } from './styledAnswer';

export const Answer = ({children, isVisible} :{isVisible: boolean, children: string}) => {
    console.log(isVisible)
    return (
        <StyledAnswer isVisible={isVisible}>
            {children}
        </StyledAnswer>
    )
}