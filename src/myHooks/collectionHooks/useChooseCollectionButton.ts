import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideCurrentCard, setTrainedCardId } from "../../store/reducers/cardWindowReducer";
import { UseChooseCollectionResponse } from "./useResponses/useChooseCollectionResponse";

export const useChooseCollectionButton = (collectionId: string, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void) ) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(getUserIdSelector);
  const [currentCollectionTriger] = collectionDataAPI.useGetCurrentCollectionToTrainMutation();
  const navigate = useNavigate();
  return () => {
      dispatch(setTrainedCardId(''))
      dispatch(hideCurrentCard());
      onChangeLoadingStatus(true)
      currentCollectionTriger(`api/choose-collection/:${collectionId}/:${currentUserId}`)
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
