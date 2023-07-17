import { STOCK_COLLECTION, Tdispatch } from "../../../constants/stockConstants";
import { setFiltersList } from "../../../store/reducers/collectionFiltersReducer";
import { setRepeatGroupsReducer } from "../../../store/reducers/collectionGroupsReducer";
import { setCurrentCollection } from "../../../store/reducers/userCollectionsReducer";
import { spreadCollectionData, TuserCollectionData } from "../../../utils/utils";


export const UseChooseCollectionResponse = (currentCollection: TuserCollectionData, dispatch: Tdispatch) => {
    dispatch(setCurrentCollection(currentCollection));
    const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
    dispatch(setRepeatGroupsReducer(orgonizedGroupsOfCollection)); 
    dispatch(setFiltersList(filtersOfCollection)); 
}