import React from 'react';
import { 
    // Tcard 
    TcollectionItemData
} from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn24HoursList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 24 hours' list={renderData} />
    )
}