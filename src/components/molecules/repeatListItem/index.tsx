import React from "react";
import { Tcard } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";

type TrepeatListItem = {
    onClick: ()=>void,
    item: Tcard,
}

export const RepeatListItem = ({onClick, item} :TrepeatListItem) => {
    return(
        <StyledRepeatListItem 
            color={item.filterColor || 'white'}
            className={`list--item ${item.filterTitle}`} 
            onClick={() => onClick()}
        >
            {item.title}
        </StyledRepeatListItem>
    )
}