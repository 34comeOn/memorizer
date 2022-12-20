import React from 'react';
import { repeatInHourArray } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatInHourList = () => {
    return(
        <StockRepeatList title='Repeat in 1 hour' list={repeatInHourArray} />
    )
}