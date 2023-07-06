import React from "react";
import { cutTitle, TcollectionItemData } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";
import './style.scss';
import { MAX_REPEATLIST_ITEM_TITLE_LENGTH } from "../../../constants/stockConstants";

type TrepeatListItem = {
    onClick: ()=>void,
    item: TcollectionItemData,
}

export const RepeatListItem = ({onClick, item} :TrepeatListItem) => {
    const itemTitle = cutTitle(item.collectionItemTitle,MAX_REPEATLIST_ITEM_TITLE_LENGTH);
    return(
        <StyledRepeatListItem 
            color={item.collectionItemColor || 'white'}
            className='list--item' 
            onClick={() => onClick()}
        >
            {itemTitle}
            <div className='repeat-counter'>
                {item.collectionItemTimesBeenRepeated}
            </div>
        </StyledRepeatListItem>
    )
}