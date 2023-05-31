import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledEditButton } from "./styledEditButton";

export const EditButton = ({collectionId = ''}: {collectionId: string}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(collectionId);
    return(
        <StyledEditButton onClick={onDeleteClickHandler} />
    )
}