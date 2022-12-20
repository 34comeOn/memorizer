import React from 'react';
import { repeatNowArray } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatNowList = () => {
    return(
        <StockRepeatList title='Repeat now' list={repeatNowArray} />
    )
}