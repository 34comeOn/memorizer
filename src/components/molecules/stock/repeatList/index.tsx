import React from 'react';
import { Tcard } from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.css';

export const StockRepeatList = ({title, list, handleOpenCard}: {title: string, list: Tcard[], handleOpenCard: (id: number)=> void}) => {
    const handleItemClick = (id: number) => {
        handleOpenCard(id);
    }
    console.log('repeeeeeeeeeeeeeeeeeeeee list updddddddddddddaaaaattttteeeeeed')
    return (
        <>
            <div className='title-wrapper'>
                <h3>{title}</h3>
                <span className='cards-counter'>
                    {`(${list.length})`}
                </span>
            </div>
            <StyledRepeatList>
                {list.map(card => <li onClick={()=> handleItemClick(card.id)} className={`list--item ${card.filter}`} key={card.id}>{card.title}</li>)}
            </StyledRepeatList>
        </>
    )
}