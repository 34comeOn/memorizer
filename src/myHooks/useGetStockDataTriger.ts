import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { RESPONSE_ERROR_TEXT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { hideCurrentCard } from "../store/reducers/cardWindowReducer";
import { UseChooseCollectionResponse } from "./collectionHooks/useResponses/useChooseCollectionResponse";

export const useGetStockDataTriger = (collectionId: string, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void) ) => {
    const dispatch = useAppDispatch();
    const currentUserId = localStorage.getItem('stockDataUserId')?? '';
    const [currentCollectionTriger] = collectionDataAPI.useGetCurrentCollectionToTrainMutation();
    const navigate = useNavigate();
    return () => {
        dispatch(hideCurrentCard());
        onChangeLoadingStatus(true)
        currentCollectionTriger(`choose-collection/:${collectionId}/:${currentUserId}`)
        .unwrap()
        .then(
          (currentCollection) => {
            onChangeLoadingStatus(false);
            UseChooseCollectionResponse(currentCollection, dispatch);
          },
          () => {
            onChangeLoadingStatus(false);
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
            throw new Error();
          }
        )
        .then(
          () => navigate('/collection')
        )
    }
}