import React from 'react';
import { Tcard } from '../../../../mock/mockData';
import { StyledRepeatList } from './styledRepeatList';
import './style.css';

export const StockRepeatList = ({title, list}: {title: string, list: Tcard[]}) => {
    console.log(list)
    return (
        <>
            <div className='title-wrapper'>
                <h3>{title}</h3>
                <span className='cards-counter'>
                    {`(${list.length})`}
                </span>
            </div>
            <StyledRepeatList>
                {list.map(card => <li className='list--item' key={card.id}>{card.title}</li>)}
            </StyledRepeatList>
        </>
    )
}