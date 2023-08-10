import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCollectionButton = ({_id, onChangeLoadingStatus, openNotification}: {_id: string,onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id, onChangeLoadingStatus, openNotification);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}