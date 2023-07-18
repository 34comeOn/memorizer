import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PUT_REPEATED_COLLECTION_ITEM_ENDPOINT, RESPONSE_ERROR_TEXT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../store/reducers/accountReducer";
import { setTrainedCardId } from "../store/reducers/cardWindowReducer";
import { getCurrentCollectionSelector} from "../store/reducers/userCollectionsReducer";
import { updateTimesBeenRepeated, TcollectionItemData, getPunishmentForLatePractice } from "../utils/utils";
import { UseCurrentCollectionResponse } from "./collectionHooks/useResponses/useCurrentCollectionResponse";

export const useDoneClickButton = (currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void, openDoneNotification: ((descriptionText: string) => void)) => {
  const TimesBeenRepeatedAfterPunish = getPunishmentForLatePractice(currentCard.collectionItemTimesBeenRepeated, currentCard.collectionItemRepeatedTimeStamp)
  const updatedTimesBeenRepeated = updateTimesBeenRepeated(TimesBeenRepeatedAfterPunish);
  
    const currentUserId = useAppSelector(getUserIdSelector);
    const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
    const dispatch = useAppDispatch();  
    const [putRepeatedCollectionItemTriger] = collectionDataAPI.usePutRepeatedCollectionItemMutation();

    return () => {
      const repeatObject = {
        userId: currentUserId,
        cardId: currentCard._id || '',
        collectionId: currentCollectionId,
        collectionItemTimesBeenRepeated: updatedTimesBeenRepeated,
        collectionItemRepeatedTimeStamp: Date.now(),
      }
      onChangeLoadingStatus(true)
      putRepeatedCollectionItemTriger({path:PUT_REPEATED_COLLECTION_ITEM_ENDPOINT, repeatObj: repeatObject})
      .unwrap()
      .then(
        (currentCollection) => {
          onChangeLoadingStatus(false);
          UseCurrentCollectionResponse(currentCollection, dispatch);
          dispatch(setTrainedCardId(currentCard._id || ''))
        },
        () => {
          onChangeLoadingStatus(false)
          openDoneNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
        }
      )
    }
}