import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockCard } from '../stock/card';

export const Card = ({card, handleDoneClick}: {card: Tcard, handleDoneClick: ()=> void}) => {
    return (
        <StockCard card={card} handleDoneClick={handleDoneClick}/>
    )
}