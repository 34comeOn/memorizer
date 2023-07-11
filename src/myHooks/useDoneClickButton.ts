import { useAppDispatch, useAppSelector } from "../app/hooks";
import { PUT_REPEATED_COLLECTION_ITEM_ENDPOINT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../store/reducers/accountReduser";
import { getCurrentCollectionSelector} from "../store/reducers/userCollectionsReduser";
import { getPunishmentForLatePractice, maximiseTimesBeenRepeated, TcollectionItemData } from "../utils/utils";
import { UseCurrentCollectionResponse } from "./collectionHooks/useResponses/useCurrentCollectionResponse";

export const useDoneClickButton = (currentCard: TcollectionItemData) => {
    const maximisedAndPunishedTimesBeenRepeated = maximiseTimesBeenRepeated(getPunishmentForLatePractice(currentCard.collectionItemTimesBeenRepeated, currentCard.collectionItemRepeatedTimeStamp));

    const currentUserId = useAppSelector(getUserIdSelector);
    const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
    const dispatch = useAppDispatch();  
    const [putRepeatedCollectionItemTriger] = collectionDataAPI.usePutRepeatedCollectionItemMutation();

    return () => {
      const repeatObject = {
        userId: currentUserId,
        cardId: currentCard._id || '',
        collectionId: currentCollectionId,
        collectionItemTimesBeenRepeated: maximisedAndPunishedTimesBeenRepeated,
        collectionItemRepeatedTimeStamp: Date.now(),
      }

      putRepeatedCollectionItemTriger({path:PUT_REPEATED_COLLECTION_ITEM_ENDPOINT, repeatObj: repeatObject})
      .unwrap()
      .then(
        (currentCollection) => {
          UseCurrentCollectionResponse(currentCollection, dispatch);
        },
        () => {
          alert('something went wrong DONE CLICK')
        }
      )
    }
}