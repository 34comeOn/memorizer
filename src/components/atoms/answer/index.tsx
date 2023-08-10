import React from 'react';
import { StyledAnswer } from './styledAnswer';

export const Answer = ({children, isVisible} :{isVisible: boolean, children: string}) => {
    return (
        <StyledAnswer isVisible={isVisible}>
            {children}
        </StyledAnswer>
    )
}