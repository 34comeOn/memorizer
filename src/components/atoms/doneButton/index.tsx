import React from 'react';

import { StockButton } from '../stock/button';

export const DoneButton = ({onClick}: {onClick : ()=> void}) => {
    return (
        <StockButton onClick={onClick} color='green' text='Done'/>
    )
}