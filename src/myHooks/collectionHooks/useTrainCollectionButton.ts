import { useAppDispatch } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { TuserCollection } from "../../store/reducers/userCollectionsReduser";
import { findCurrentUserCollection, getAllCurrentUserData, getCurrentUserEmailFromLStorage, setCurrentCollectionToLocalStorage, spreadCollectionData } from "../../utils/utils";

export const useTrainCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();

    return () => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);
        const currentUserCollection = findCurrentUserCollection(collectionId, allCurrentUserData.userCollectionsData);
        setCurrentCollectionToLocalStorage(collectionId, allCurrentUserData.userCollectionsData);
        // const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(allCurrentUserData.userCollectionsData.find((item: TuserCollection) => item._id === collectionId).data || STOCK_COLLECTION.data);
        const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentUserCollection?.data || STOCK_COLLECTION.data);
        dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
        dispatch(setFiltersList(filtersOfCollection)); 
        
    }

}    





