import React from "react";
import { cutTitle, TcollectionItemData } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";
import { MAX_REPEATLIST_ITEM_TITLE_LENGTH } from "../../../constants/stockConstants";
import './style.scss';
import { RepeatCounter } from "../repeatCounter";

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
            <RepeatCounter item={item}/>
        </StyledRepeatListItem>
    )
}