import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';


export const RepeatInHourList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 1 hour' list={renderData} />
    )
}