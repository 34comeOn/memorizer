import React from 'react';
import { Tcard } from '../../../utills/utills';
import { StockRepeatList } from '../stock/repeatList';


export const RepeatInHourList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: (id: number)=> void}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat in 1 hour' list={renderData} />
    )
}