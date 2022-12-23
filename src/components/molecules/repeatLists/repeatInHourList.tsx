import React from 'react';
import { repeatInHourArray, Tcard } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatInHourList = ({renderData}: {renderData: Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 1 hour' list={renderData} />
    )
}