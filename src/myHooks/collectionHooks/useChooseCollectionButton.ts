import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { REFRESH, RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideCurrentCard, setTrainedCardId } from "../../store/reducers/cardWindowReducer";
import { UseChooseCollectionResponse } from "./useResponses/useChooseCollectionResponse";

export const useChooseCollectionButton = (collectionId: string, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void) ) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(getUserIdSelector);
  const [currentCollectionTriger] = collectionDataAPI.useGetCurrentCollectionToTrainMutation();
  const [refreshTriger] = collectionDataAPI.useRefreshMutation();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken') || '';

  return async () => {
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
          if (error.status === 403) {
            return refreshTriger(REFRESH)
            .unwrap()
            .then(
              (accessToken) => {
                localStorage.setItem('accessToken', JSON.stringify(accessToken));
                const refreshedAccessToken = localStorage.getItem('accessToken') || '';
                return currentCollectionTriger({path: `api/choose-collection/:${collectionId}/:${currentUserId}`, accessToken: refreshedAccessToken})
                .unwrap()
                .then(
                  (currentCollection) => {
                    onChangeLoadingStatus(false);
                    UseChooseCollectionResponse(currentCollection, dispatch);
                  }
                )
                .catch(
                  () => {
                    onChangeLoadingStatus(false);
                    openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
                    throw new Error();
                  }
                )
              }
            )
            .catch(
              () => {
                onChangeLoadingStatus(false);
                openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
                throw new Error();
              }
            )
          } else {
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
            throw new Error();
          }
        }
      )
      .then(
        () => navigate('/collection')
      )

  }
}    
