import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn4HoursList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 4 hours' list={renderData} />
    )
}