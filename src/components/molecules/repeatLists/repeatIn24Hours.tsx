import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList} from '../stock/repeatList';

export const RepeatIn24HoursList = ({renderData}: {renderData:Tcard[]}) => {
    return(
        <StockRepeatList title='Repeat in 24 hours' list={renderData} />
    )
}