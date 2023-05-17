import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatIn8HoursList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 8 hours' list={renderData} />
    )
}