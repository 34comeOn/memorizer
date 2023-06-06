import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { getBasicUserCollectionsInfoSelector } from "../../../store/reducers/userCollectionsReduser";
import { StyledUserCollectionsList } from "./styledUserCollectionsList";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { nanoid } from "nanoid";

export const UserCollectionsList = () => {
    const allUserCollections = useAppSelector(getBasicUserCollectionsInfoSelector);
    console.log(allUserCollections)
    return (
        <StyledUserCollectionsList>
            {allUserCollections.map(item =>
            <UserCollection key={item._id?? nanoid()} title={item.collectionTitle} color={item.collectionColor || STOCK_COLLECTION_COLOR} adminList={item.collectionAdminList} collectionId={item._id?? nanoid()}></UserCollection>
            )}
        </ StyledUserCollectionsList >
    )
}