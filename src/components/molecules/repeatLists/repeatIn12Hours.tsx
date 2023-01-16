import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatIn12HoursList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: (id: number)=> void}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat in 12 hours' list={renderData} />
    )
}