import React from 'react';
import { Tcard } from '../../../utils/utils';
import { StockCard } from '../stock/card';

export const Card = ({card}: {card: Tcard}) => {
    return (
        <StockCard card={card}/>
    )
}