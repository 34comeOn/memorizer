import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCollectionButton = ({_id}: {_id: string}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}