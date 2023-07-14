import React from 'react';
import { TcollectionItemData } from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getListOfCurrentFiltersSelector } from '../../../../store/reducers/collectionFiltersReduser';
import { MAIN_FILTER_CHECKBOX, MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from '../../../../constants/stringConstants';
import { hideAnswer, setCurrentCard, showCurrentCard } from '../../../../store/reducers/cardWindowReduser';
import { RepeatListItem } from '../../repeatListItem';
import { nanoid } from 'nanoid';
import { setContentForModalWindow, showModalWindow } from '../../../../store/reducers/modalWindowReduser';

export type ThandleOpenCard = (id: string) => void

export const StockRepeatList = ({title, list}: {title: string, list: TcollectionItemData[]}) => {
    const dispatch = useAppDispatch();

    const handleItemClick = (currentCard: TcollectionItemData) => {
        dispatch(setCurrentCard(currentCard));
        dispatch(hideAnswer());
        dispatch(showCurrentCard());
        dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.RENDER_ITEM_OF_COLLECTION));
        dispatch(showModalWindow());
    }
    const currentlistItemsCategories = useAppSelector(getListOfCurrentFiltersSelector);

    return (
        <>
            <div className='title-wrapper'>
                <span>{title}</span>
                <span className='cards-counter'>
                    {`(${list.length})`}
                </span>
            </div>
            <StyledRepeatList>
                {list.map(item => {
                    const itemFilter = item.collectionItemCategory;
                    return ((itemFilter? currentlistItemsCategories.includes(itemFilter): false) || currentlistItemsCategories.includes(MAIN_FILTER_CHECKBOX)) && 
                    <RepeatListItem item={item} key={item._id?? nanoid()} onClick={()=> {handleItemClick(item)}} />
                })
                }
            </StyledRepeatList>
        </>
    )
}