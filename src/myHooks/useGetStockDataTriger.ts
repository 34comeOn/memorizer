import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { STOCK_COLLECTION_LOCAL_STORAGE } from "../constants/stockConstants";
// import { GET_DATA_ENDPOINT } from "../constants/stringConstants";
// import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { hideCurrentCard } from "../store/reducers/cardWindowReducer";
import { setFiltersList } from "../store/reducers/collectionFiltersReducer";
import { setRepeatGroupsReducer } from "../store/reducers/collectionGroupsReducer";
import { spreadCollectionData } from "../utils/utils";

export const useGetStockDataTriger = () => {
    const dispatch = useAppDispatch();
    // const [getCollectionDataTriger] = collectionDataAPI.useGetCollectionDataMutation();
    const navigate = useNavigate();
    return () => {

        dispatch(hideCurrentCard());
        const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(STOCK_COLLECTION_LOCAL_STORAGE.collectionData);
        dispatch(setRepeatGroupsReducer(orgonizedGroupsOfCollection)); 
        dispatch(setFiltersList(filtersOfCollection)); 
        navigate('/collection');


        // getCollectionDataTriger(GET_DATA_ENDPOINT)
        // .unwrap()
        // .then((response) => {
        //     const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);
            
        //     dispatch(setRepeatGroupsReducer(orgonizedGroupsOfCollection)); 
        //     dispatch(setFiltersList(filtersOfCollection)); 
        // })
        // .then(() => navigate('/collection'));
    }
}