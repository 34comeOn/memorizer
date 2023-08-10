import React, { useEffect } from "react";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { nanoid } from "nanoid";
import { StyledUserCollectionsList } from "../userCollectionsList/styledUserCollectionsList";
import { collectionDataAPI } from "../../../RTKApi/collectionDataApi";
import { GET_STOCK_COLLECTION_ENG_ENDPOINT, RESPONSE_ERROR_TEXT, STOCK_DATA_USER_ID } from "../../../constants/stringConstants";
import { CustomSpinner } from "../../atoms/customSpinner";
import { notification } from "antd";

export const StockCollectionsList = () => {
    const [requestStockCollectionData, result] = collectionDataAPI.useGetStockCollectionDataMutation();
    const { data: allStockCollections, isLoading, isSuccess, isError } = result;

    useEffect(() => {
        const requestStockCollectionDataOnLoad = async () => {
        try {
            await requestStockCollectionData(GET_STOCK_COLLECTION_ENG_ENDPOINT).unwrap();
        } catch (err) {
            notification.error({message: RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG, placement: 'top'})
        }
        };
        requestStockCollectionDataOnLoad();
    }, [requestStockCollectionData]);

    if (isLoading) {
        return  <CustomSpinner isLoading={isLoading} />
    }
    if (isSuccess) {
        localStorage.setItem('stockDataUserId', STOCK_DATA_USER_ID)
        return (
            <StyledUserCollectionsList>
                {Array.isArray(allStockCollections) && allStockCollections.map(item =>
                <UserCollection key={item._id || nanoid()} title={item.collectionTitle} color={item.collectionColor || STOCK_COLLECTION_COLOR} adminList={item.collectionAdminList} _id={item._id || ''}></UserCollection>
                )}
            </ StyledUserCollectionsList >
        );
    }
    if (isError) {
        notification.error({message: RESPONSE_ERROR_TEXT.STOCK_COLLECTION_HAS_NOT_LOADED, placement: 'top'})
    }
    return null;
}
