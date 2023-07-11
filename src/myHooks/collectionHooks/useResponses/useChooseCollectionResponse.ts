import { STOCK_COLLECTION, Tdispatch } from "../../../constants/stockConstants";
import { setFiltersList } from "../../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../../store/reducers/collectionGroupsReduser";
import { setCurrentCollection } from "../../../store/reducers/userCollectionsReduser";
import { spreadCollectionData, TuserCollectionData } from "../../../utils/utils";


export const UseChooseCollectionResponse = (currentCollection: TuserCollectionData, dispatch: Tdispatch) => {
    dispatch(setCurrentCollection(currentCollection));
    const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
    dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
    dispatch(setFiltersList(filtersOfCollection)); 
}