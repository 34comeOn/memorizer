import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReducer";
import { TcollectionItemData} from "../../utils/utils";
import { UseCurrentCollectionResponse } from "./useResponses/useCurrentCollectionResponse";

export const useDeleteCardButton = (currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(getUserIdSelector);
  const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
  const [deleteCardTriger] = collectionDataAPI.useDeleteCardMutation();
  return () => {
      onChangeLoadingStatus(true)

      deleteCardTriger(`card/:${currentCard._id}/:${currentCollectionId}/:${currentUserId}`)
      .unwrap()
      .then(
          (currentCollection) => {
              onChangeLoadingStatus(false)
              UseCurrentCollectionResponse(currentCollection, dispatch);
            },
            () => {
              onChangeLoadingStatus(false)
              openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
      )
  }
}