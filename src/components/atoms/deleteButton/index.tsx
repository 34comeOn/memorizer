import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "./styledDeleteButton";

export const DeleteButton = ({_id}: {_id: string}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}