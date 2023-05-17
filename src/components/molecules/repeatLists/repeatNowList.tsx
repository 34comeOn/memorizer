import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatNowList = ({renderData}: {renderData:Tcard[]}) => {

    return(
        <StockRepeatList title='Repeat now' list={renderData} />
    )
}