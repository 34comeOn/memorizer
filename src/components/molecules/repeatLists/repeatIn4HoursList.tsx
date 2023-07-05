import React from 'react';
import { 
    TcollectionItemData
} from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn4HoursList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 4 hours' list={renderData} />
    )
}