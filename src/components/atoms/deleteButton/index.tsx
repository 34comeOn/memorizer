import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "./styledDeleteButton";

export const DeleteButton = ({collectionId = ''}: {collectionId: string}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(collectionId);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}