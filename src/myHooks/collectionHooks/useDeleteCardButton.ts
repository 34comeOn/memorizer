import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReducer";
import { TcollectionItemData} from "../../utils/utils";
import { UseCurrentCollectionResponse } from "./useResponses/useCurrentCollectionResponse";

export const useDeleteCardButton = (currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void) => {
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
            (error) => {
              alert('something went wrong while DELETE CARD')
            }
      )
  }
}