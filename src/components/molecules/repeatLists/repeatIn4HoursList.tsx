import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList, ThandleOpenCard } from '../stock/repeatList';

export const RepeatIn4HoursList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: ThandleOpenCard}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat in 4 hours' list={renderData} />
    )
}