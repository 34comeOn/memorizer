import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { hideModalWindow, removeContentFromModalWindow } from "../../store/reducers/modalWindowReduser";
import { getCurrentCollectionSelector, setCurrentCollection } from "../../store/reducers/userCollectionsReduser";
import { spreadCollectionData, TcollectionItemData} from "../../utils/utils";

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
              dispatch(setCurrentCollection(currentCollection));
              const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
              dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
              dispatch(setFiltersList(filtersOfCollection)); 
              dispatch(removeContentFromModalWindow()); 
              dispatch(hideModalWindow()); 
            },
            (error) => {
              alert('something went wrong while DELETE CARD')
            }
      )
  }
}