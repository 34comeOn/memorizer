import React from 'react';
import { Tcard } from '../../../utills/utills';
import { StockRepeatList } from '../stock/repeatList';

export const RepeatNowList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: (id: number)=> void}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat now' list={renderData} />
    )
}