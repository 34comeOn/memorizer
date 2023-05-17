import React from 'react';
import { Tcard } from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.css';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getUpdatedlistItemsCategories } from '../../../../store/reducers/collectionFiltersReduser';
import { MAIN_FILTER_CHECKBOX } from '../../../../constants/stringConstants';
import { hideAnswer, setCurrentCard, showCurrentCard } from '../../../../store/reducers/cardWindowReduser';

export type ThandleOpenCard = (id: string) => void

export const StockRepeatList = ({title, list}: {title: string, list: Tcard[]}) => {
    const dispatch = useAppDispatch();

    const handleItemClick = (currentCard: Tcard) => {
        dispatch(setCurrentCard(currentCard));
        dispatch(hideAnswer());
        dispatch(showCurrentCard());
    }
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
                    const itemFilter = item.filter?.slice(14);
                    return ((itemFilter? currentlistItemsCategories.includes(itemFilter): false) || currentlistItemsCategories.includes(MAIN_FILTER_CHECKBOX)) && 
                    <li 
                        onClick={()=> {handleItemClick(item)}} 
                        className={`list--item ${item.filter}`} 
                        key={item['_id']}
                    >
                        {item.title}
                    </li> })
                }
            </StyledRepeatList>
        </>
    )
}