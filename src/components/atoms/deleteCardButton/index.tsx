import React from "react"
import { useDeleteCardButton } from "../../../myHooks/collectionHooks/useDeleteCardButton";
import { TcollectionItemData } from "../../../utils/utils";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCardButton = ({currentCard, onChangeLoadingStatus}: {currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void}) => {
    const onDeleteClickHandler = useDeleteCardButton(currentCard, onChangeLoadingStatus);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}