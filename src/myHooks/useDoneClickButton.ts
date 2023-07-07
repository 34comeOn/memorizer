import { useAppDispatch, useAppSelector } from "../app/hooks";
import { STOCK_COLLECTION } from "../constants/stockConstants";
import { PUT_REPEATED_COLLECTION_ITEM_ENDPOINT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../store/reducers/accountReduser";
import { setFiltersList } from "../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../store/reducers/collectionGroupsReduser";
import { hideModalWindow, removeContentFromModalWindow } from "../store/reducers/modalWindowReduser";
import { getCurrentCollectionSelector, setCurrentCollection } from "../store/reducers/userCollectionsReduser";
import { getPunishForLatePractice, maximiseTimesBeenRepeated, spreadCollectionData, TcollectionItemData } from "../utils/utils";

export const useDoneClickButton = (currentCard: TcollectionItemData) => {
    const maximisedAndPunishedTimesBeenRepeated = maximiseTimesBeenRepeated(getPunishForLatePractice(currentCard));

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
          dispatch(setCurrentCollection(currentCollection));
          const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
          dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
          dispatch(setFiltersList(filtersOfCollection)); 
          dispatch(removeContentFromModalWindow()); 
          dispatch(hideModalWindow()); 
        },
        () => {
          alert('something went wrong DONE CLICK')
        }
      )
    }
}