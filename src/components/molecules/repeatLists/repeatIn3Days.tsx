import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatIn3DaysList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 3 days' list={renderData} />
    )
}