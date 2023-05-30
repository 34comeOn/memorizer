import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { getAllUserCollectionsState } from "../../../store/reducers/userCollectionsReduser";
import { StyledUserCollectionsList } from "./styledUserCollectionsList";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";

export const UserCollectionsList = () => {
    const allUserCollections = useAppSelector(getAllUserCollectionsState);
    return (
        <StyledUserCollectionsList>
            {allUserCollections.map(item =>
            <UserCollection key={item._id} title={item.title} color={item.color || STOCK_COLLECTION_COLOR} adminList={item.adminList} collectionId={item._id}></UserCollection>
            )}
        </ StyledUserCollectionsList >
    )
}