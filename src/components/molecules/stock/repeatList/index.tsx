import React from 'react';
import { Tcard } from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.css';
import { useAppSelector } from '../../../../app/hooks';
import { getAllFilterState, getUpdatedlistItemsCategories } from '../../../../store/reducers/checkboxReduser';

export type ThandleOpenCard = (id: string) => void

export const StockRepeatList = ({title, list, handleOpenCard}: {title: string, list: Tcard[], handleOpenCard: ThandleOpenCard}) => {
    const handleItemClick = (id: string) => {
        handleOpenCard(id);
    }
    const status = !useAppSelector(getAllFilterState);
    const currentlistItemsCategories = useAppSelector(getUpdatedlistItemsCategories);
    return (
        <>
            <div className='title-wrapper'>
                <h3>{title}</h3>
                <span className='cards-counter'>
                    {`(${list.length})`}
                </span>
            </div>
            <StyledRepeatList>
                {list.map(item => {
                    const itemFilter = item.filter?.slice(14)
                    return ((itemFilter? !currentlistItemsCategories.includes(itemFilter): false) || status) && <li onClick={()=> {
                    handleItemClick(item['_id']) 
                    }} className={`list--item ${item.filter}`} key={item['_id']}>{item.title}</li> })}
            </StyledRepeatList>
        </>
    )
}