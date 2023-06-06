import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { getAllUserCollectionsSelector } from "../../../store/reducers/userCollectionsReduser";
import { StyledUserCollectionsList } from "./styledUserCollectionsList";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";

export const UserCollectionsList = () => {
    const allUserCollections = useAppSelector(getAllUserCollectionsSelector);
    console.log(allUserCollections)
    return (
        <StyledUserCollectionsList>
            {allUserCollections.map(item =>
            <UserCollection key={item.collectionId} title={item.collectionTitle} color={item.collectionColor || STOCK_COLLECTION_COLOR} adminList={item.collectionAdminList} collectionId={item.collectionId}></UserCollection>
            )}
        </ StyledUserCollectionsList >
    )
}