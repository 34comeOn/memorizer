import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList, ThandleOpenCard } from '../stock/repeatList';

export const RepeatIn8HoursList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: ThandleOpenCard}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat in 8 hours' list={renderData} />
    )
}