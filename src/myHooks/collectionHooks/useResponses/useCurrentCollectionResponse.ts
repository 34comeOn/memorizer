import { STOCK_COLLECTION, Tdispatch } from "../../../constants/stockConstants";
import { setFiltersList } from "../../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../../store/reducers/collectionGroupsReduser";
import { hideModalWindow, removeContentFromModalWindow } from "../../../store/reducers/modalWindowReduser";
import { setCurrentCollection } from "../../../store/reducers/userCollectionsReduser";
import { spreadCollectionData, TuserCollectionData } from "../../../utils/utils";


export const UseCurrentCollectionResponse = (currentCollection: TuserCollectionData, dispatch: Tdispatch) => {
    dispatch(setCurrentCollection(currentCollection));
    const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
    dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
    dispatch(setFiltersList(filtersOfCollection)); 
    dispatch(removeContentFromModalWindow()); 
    dispatch(hideModalWindow()); 
}