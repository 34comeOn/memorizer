import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { getUserIdFromStore } from "../../store/reducers/accountReduser";
import { hideCurrentCard } from "../../store/reducers/cardWindowReduser";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { 
    // findCurrentUserCollection, getAllCurrentUserData, getCurrentUserEmailFromLStorage, setCurrentCollectionToLocalStorage, 
    spreadCollectionData } from "../../utils/utils";

export const useTrainCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdFromStore);

    return () => {
        dispatch(hideCurrentCard());

        // const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentUserCollection?.collectionData || STOCK_COLLECTION.collectionData);
        // dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
        // dispatch(setFiltersList(filtersOfCollection)); 
    }
}    
