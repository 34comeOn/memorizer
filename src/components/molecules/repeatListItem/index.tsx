import React from "react";
import { 
    // Tcard,
     TcollectionItemData } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";

// type TrepeatListItem = {
//     onClick: ()=>void,
//     item: Tcard,
// }
type TrepeatListItem = {
    onClick: ()=>void,
    item: TcollectionItemData,
}

export const RepeatListItem = ({onClick, item} :TrepeatListItem) => {
    return(
        <StyledRepeatListItem 
            color={item.collectionItemColor || 'white'}
            className={`list--item ${item.collectionItemCategory}`} 
            onClick={() => onClick()}
        >
            {item.collectionItemTitle}
        </StyledRepeatListItem>
    )
}