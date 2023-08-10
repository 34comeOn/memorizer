import React from "react"
import { useDeleteCardButton } from "../../../myHooks/collectionHooks/useDeleteCardButton";
import { TcollectionItemData } from "../../../utils/utils";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCardButton = ({currentCard, onChangeLoadingStatus, openNotification}: {currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)}) => {
    const onDeleteClickHandler = useDeleteCardButton(currentCard, onChangeLoadingStatus, openNotification);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}