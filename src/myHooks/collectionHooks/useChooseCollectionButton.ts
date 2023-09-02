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
            console.log('trying to refresh')
            onChangeLoadingStatus(true)
            openNotification(RESPONSE_ERROR_TEXT.AUTHORIZATION_FAILED)
            refreshTriger(REFRESH)
            .unwrap()
            .then(
              (accessToken) => {

                localStorage.setItem('accessToken', JSON.stringify(accessToken));
                console.log('refresh response good')
                const refreshedAccessToken = localStorage.getItem('accessToken') || '';
                currentCollectionTriger({path: `api/choose-collection/:${collectionId}/:${currentUserId}`, accessToken: refreshedAccessToken})
                .unwrap()
                .then(
                  (currentCollection) => {
                    onChangeLoadingStatus(false);
                    UseChooseCollectionResponse(currentCollection, dispatch);
                  },
                  () => {
                    onChangeLoadingStatus(false);
                    openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
                  }
                )

              },
              () => {
                onChangeLoadingStatus(false)
                openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
              }
            )
          } else {
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
          }
          // throw new Error(error);
        }
      )
      .then(
        () => navigate('/collection')
      )
  }
}    
