import React from 'react';
import { repeatIn4HoursArray } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatIn4HoursList = () => {
    return(
        <StockRepeatList title='Repeat in 4 hour' list={repeatIn4HoursArray} />
    )
}