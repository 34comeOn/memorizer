import React from 'react';
import { Tcard } from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.css';

export type ThandleOpenCard = (id: string) => void

export const StockRepeatList = ({title, list, handleOpenCard}: {title: string, list: Tcard[], handleOpenCard: ThandleOpenCard}) => {
    const handleItemClick = (id: string) => {
        handleOpenCard(id);
    }
    
    return (
        <>
            <div className='title-wrapper'>
                <h3>{title}</h3>
                <span className='cards-counter'>
                    {`(${list.length})`}
                </span>
            </div>
            <StyledRepeatList>
                {list.map(item => <li onClick={()=> {
                    handleItemClick(item['_id']) 
                    console.log(item['_id'])
                    }} className={`list--item ${item.filter}`} key={item['_id']}>{item.title}</li>)}
            </StyledRepeatList>
        </>
    )
}