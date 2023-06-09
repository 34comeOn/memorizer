import React from 'react';
import { 
    // Tcard,
    TcollectionItemData
 } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatIn8HoursList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 8 hours' list={renderData} />
    )
}