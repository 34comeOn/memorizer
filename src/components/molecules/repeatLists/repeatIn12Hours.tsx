import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn12HoursList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 12 hours' list={renderData} />
    )
}