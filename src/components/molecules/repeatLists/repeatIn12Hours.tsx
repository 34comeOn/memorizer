import React from 'react';
import { 
    // Tcard,
    TcollectionItemData
} from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn12HoursList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 12 hours' list={renderData} />
    )
}