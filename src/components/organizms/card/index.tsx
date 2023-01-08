import React from 'react';
import { Tcard } from '../../../utills/utills';
import { StockCard } from '../stock/card';

export const Card = ({card}: {card: Tcard}) => {
    return (
        <StockCard card={card}/>
    )
}