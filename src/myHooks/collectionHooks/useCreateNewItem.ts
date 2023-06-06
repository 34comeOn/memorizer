import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { findCurrentUserCollection, getAllCurrentUserData, getCurrentUserEmailFromLStorage, 
    // setCurrentCollectionToLocalStorage,
     spreadCollectionData, TuserCollectionsData } from "../../utils/utils";

export interface InewCollectionItemForm {
    cardTitle: string, 
    cardAnswer: string, 
    filterTitle: string,
    filterColor: string, 
}

export const useCreateNewItem = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (values: InewCollectionItemForm) => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);
        // const currentCollectionId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION)|| JSON.stringify({'_id': '000'}))._id
        const currentCollectionId = nanoid();
        const newItem = {
            collectionItemId: nanoid(),   
            collectionItemTitle: values.cardTitle,
            collectionItemAnswer: values.cardAnswer,
            collectionItemRepeatedTimeStamp: 1671420000000,
            collectionItemTimesBeenRepeated: 0,
            collectionItemCategory: `list--filter__${values.filterTitle? values.filterTitle: "none"}`,
            collectionItemColor: values.filterColor,
        };

        const updatedAllCollections = allCurrentUserData.userCollectionsData.map((collection: TuserCollectionsData) => {
            if (collection.collectionId === currentCollectionId) {
                collection.collectionData = [...collection.collectionData, newItem];
            }
            return collection;
        })
        const newAllUserData = {...allCurrentUserData, userCollectionsData: updatedAllCollections};
        
        localStorage.setItem(currentUserEmailFromLStorage, JSON.stringify(newAllUserData))
        // setCurrentCollectionToLocalStorage(currentCollectionId,newAllUserData.userCollectionsData)

        const currentUserCollection = findCurrentUserCollection(currentCollectionId, newAllUserData.userCollectionsData);
        const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentUserCollection?.collectionData || STOCK_COLLECTION.collectionData);
        dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
        dispatch(setFiltersList(filtersOfCollection)); 
        navigate(-1);
    }
}