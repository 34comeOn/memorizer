import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCollectionButton = ({_id, onChangeLoadingStatus}: {_id: string,onChangeLoadingStatus : (value: boolean)=> void}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id, onChangeLoadingStatus);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}