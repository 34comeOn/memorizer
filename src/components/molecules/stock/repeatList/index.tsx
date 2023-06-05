import React from 'react';
import { 
    // Tcard
    TcollectionItemData
} from '../../../../utils/utils';
import { StyledRepeatList } from './styledRepeatList';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getUpdatedlistItemsCategories } from '../../../../store/reducers/collectionFiltersReduser';
import { MAIN_FILTER_CHECKBOX } from '../../../../constants/stringConstants';
import { hideAnswer, setCurrentCard, showCurrentCard } from '../../../../store/reducers/cardWindowReduser';
import { RepeatListItem } from '../../repeatListItem';

export type ThandleOpenCard = (id: string) => void

export const StockRepeatList = ({title, list}: {title: string, list: TcollectionItemData[]}) => {
    const dispatch = useAppDispatch();

    const handleItemClick = (currentCard: TcollectionItemData) => {
        dispatch(setCurrentCard(currentCard));
        dispatch(hideAnswer());
        dispatch(showCurrentCard());
    }
    const currentlistItemsCategories = useAppSelector(getUpdatedlistItemsCategories);

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
                    const itemFilter = item.collectionItemCategory?.slice(14);
                    return ((itemFilter? currentlistItemsCategories.includes(itemFilter): false) || currentlistItemsCategories.includes(MAIN_FILTER_CHECKBOX)) && 
                    <RepeatListItem item={item} key={item.collectionItemId} onClick={()=> {handleItemClick(item)}} />
                })
                }
            </StyledRepeatList>
        </>
    )
}