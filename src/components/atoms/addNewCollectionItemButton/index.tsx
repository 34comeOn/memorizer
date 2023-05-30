import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTS_CONSTANTS } from "../../../constants/stringConstants";
import { StyledAddNewItemButton } from "./styledAddNewItemButton";

export const AddNewCollectionItemButton = () => {
    const navigate = useNavigate();
    return(
        <StyledAddNewItemButton onClick={() => navigate(ROUTS_CONSTANTS.NEW_COLLECTION_ITEM_PAGE)}>
            Add new card
        </ StyledAddNewItemButton>
    )
}