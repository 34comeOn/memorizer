import React from 'react';
import { TcollectionItemData } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatNowList = ({renderData}: {renderData:TcollectionItemData[]}) => {

    return(
        <StockRepeatList title='Repeat now' list={renderData} />
    )
}