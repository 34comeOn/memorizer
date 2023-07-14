import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PUT_REPEATED_COLLECTION_ITEM_ENDPOINT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../store/reducers/accountReduser";
import { setTrainedCardId } from "../store/reducers/cardWindowReduser";
import { getCurrentCollectionSelector} from "../store/reducers/userCollectionsReduser";
import { updateTimesBeenRepeated, TcollectionItemData, getPunishmentForLatePractice } from "../utils/utils";
import { UseCurrentCollectionResponse } from "./collectionHooks/useResponses/useCurrentCollectionResponse";

export const useDoneClickButton = (currentCard: TcollectionItemData) => {
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

      putRepeatedCollectionItemTriger({path:PUT_REPEATED_COLLECTION_ITEM_ENDPOINT, repeatObj: repeatObject})
      .unwrap()
      .then(
        (currentCollection) => {
          UseCurrentCollectionResponse(currentCollection, dispatch);
          dispatch(setTrainedCardId(currentCard._id || ''))
        },
        () => {
          alert('something went wrong DONE CLICK')
        }
      )
    }
}