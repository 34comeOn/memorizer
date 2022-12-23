import React from 'react';
import { repeatNowArray, Tcard } from '../../../mock/mockData';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatNowList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat now' list={renderData} />
    )
}