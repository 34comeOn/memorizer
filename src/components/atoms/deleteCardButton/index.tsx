import React from "react"
import { useDeleteCardButton } from "../../../myHooks/collectionHooks/useDeleteCardButton";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";

export const DeleteCardButton = ({_id}: {_id: string}) => {
    const onDeleteClickHandler = useDeleteCardButton(_id);
    return(
        <StyledDeleteButton onClick={onDeleteClickHandler} />
    )
}