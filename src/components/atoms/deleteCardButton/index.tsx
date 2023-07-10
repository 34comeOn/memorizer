import React from "react"
import { useDeleteCardButton } from "../../../myHooks/collectionHooks/useDeleteCardButton";
import { TcollectionItemData } from "../../../utils/utils";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCardButton = ({currentCard}: {currentCard: TcollectionItemData}) => {
    const onDeleteClickHandler = useDeleteCardButton(currentCard);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}