import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList, ThandleOpenCard } from '../stock/repeatList';

export const RepeatIn24HoursList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: ThandleOpenCard}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat in 24 hours' list={renderData} />
    )
}