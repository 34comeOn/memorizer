import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockRepeatList, ThandleOpenCard } from '../stock/repeatList';

export const RepeatNowList = ({renderData, handleOpenCard}: {renderData:Tcard[], handleOpenCard: ThandleOpenCard}) => {
    return(
        <StockRepeatList handleOpenCard={handleOpenCard} title='Repeat now' list={renderData} />
    )
}