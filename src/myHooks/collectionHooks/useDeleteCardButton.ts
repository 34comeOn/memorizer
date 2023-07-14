import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReduser";
import { TcollectionItemData} from "../../utils/utils";
import { UseCurrentCollectionResponse } from "./useResponses/useCurrentCollectionResponse";

export const useDeleteCardButton = (currentCard: TcollectionItemData) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(getUserIdSelector);
  const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
  const [deleteCardTriger] = collectionDataAPI.useDeleteCardMutation();
  return () => {
      deleteCardTriger(`card/:${currentCard._id}/:${currentCollectionId}/:${currentUserId}`)
      .unwrap()
      .then(
          (currentCollection) => {
              UseCurrentCollectionResponse(currentCollection, dispatch);
            },
            (error) => {
              alert('something went wrong while DELETE CARD')
            }
      )
  }
}