import React from 'react';
import { 
    // Tcard
    TcollectionItemData
} from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';


export const RepeatInHourList = ({renderData}: {renderData:TcollectionItemData[]}) => {
    return(
        <StockRepeatList title='Repeat in 1 hour' list={renderData} />
    )
}