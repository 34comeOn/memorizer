import React from 'react';
import { repeatIn4HoursArray, Tcard } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatIn4HoursList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 4 hour' list={renderData} />
    )
}