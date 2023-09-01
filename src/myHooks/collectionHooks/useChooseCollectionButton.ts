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
  const accessToken = localStorage.getItem('accessToken') || '';
  
  return () => {
      dispatch(setTrainedCardId(''))
      dispatch(hideCurrentCard());
      onChangeLoadingStatus(true)
      currentCollectionTriger({path: `api/choose-collection/:${collectionId}/:${currentUserId}`,accessToken})
      .unwrap()
      .then(
        (currentCollection) => {
          onChangeLoadingStatus(false);
          UseChooseCollectionResponse(currentCollection, dispatch);
        },
        (error) => {
          onChangeLoadingStatus(false);

          if (error.status === 403) {
            openNotification(RESPONSE_ERROR_TEXT.AUTHORIZATION_FAILED)
          } else {
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
          }
          throw new Error(error);
        }
      )
      .then(
        () => navigate('/collection')
      )
  }
}    
