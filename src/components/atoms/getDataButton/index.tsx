import React from "react";
import './style.css';
import { useAppDispatch} from "../../../app/hooks";
import { GET_DATA_ENDPOINT } from "../../../constants/stringConstants";
import { collectionDataAPI } from "../../../RTKApi/collectionDataApi";
import { setFiltersList } from "../../../store/reducers/collectionFiltersReduser";
import { repeatNowGroupReduser } from "../../../store/reducers/collectionGroupsReduser";
import { spreadCollectionData } from "../../../utils/utils";

export const GetDataButton = () => {
    const dispatch = useAppDispatch();
    const [getCollectionDataTriger] = collectionDataAPI.useGetCollectionDataMutation();

    const handleGetDataClick = () => {
        getCollectionDataTriger(GET_DATA_ENDPOINT)
        .unwrap()
        .then((response) => {
        const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);
    
        dispatch(repeatNowGroupReduser(orgonizedGroupsOfCollection)); 
        dispatch(setFiltersList(filtersOfCollection)); 
        })
      }

    return (
        <button className='button__getData' onClick={() => handleGetDataClick() }>My Q&A</button>
    );
}