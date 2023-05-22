import { useAppDispatch } from "../app/hooks";
import { GET_DATA_ENDPOINT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { setFiltersList } from "../store/reducers/collectionFiltersReduser";
import { repeatGroupsReduser } from "../store/reducers/collectionGroupsReduser";
import { spreadCollectionData } from "../utils/utils";

export const useGetDataTriger = () => {
    const dispatch = useAppDispatch();
    const [getCollectionDataTriger] = collectionDataAPI.useGetCollectionDataMutation();

    return () => {
        getCollectionDataTriger(GET_DATA_ENDPOINT)
        .unwrap()
        .then((response) => {
        const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);
    
        dispatch(repeatGroupsReduser(orgonizedGroupsOfCollection)); 
        dispatch(setFiltersList(filtersOfCollection)); 
        })
    }
}