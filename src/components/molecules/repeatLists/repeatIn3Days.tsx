import React from 'react';
import { 
TcollectionItemData
} from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatIn3DaysList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 3 days' list={renderData} />
    )
}