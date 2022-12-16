import React from 'react';

import { StockButton } from '../stock/button';

export const ShowButton = ({onClick}: {onClick : ()=> void}) => {
    return (
        <StockButton onClick={onClick} color='yellow' text='Show answer'/>
    )
}