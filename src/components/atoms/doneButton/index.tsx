import React from 'react';

import { StockButton } from '../stock/button';

export const DoneButton = ({onClick, disabled}: {onClick : ()=> void, disabled?: boolean}) => {
    return (
        <StockButton disabled={disabled} onClick={onClick} color='#45b8ad' text='Done'/>
    )
}