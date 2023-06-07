import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { GET_CURRENT_COLLECTION_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { hideCurrentCard } from "../../store/reducers/cardWindowReduser";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { setCurrentCollection } from "../../store/reducers/userCollectionsReduser";
import { spreadCollectionData } from "../../utils/utils";

export const useTrainCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const [currentCollectionTriger] = collectionDataAPI.usePostCurrentCollectionMutation();
    return () => {
        dispatch(hideCurrentCard());
        currentCollectionTriger({path:GET_CURRENT_COLLECTION_ENDPOINT, currentUserId: currentUserId, collectionId: collectionId})
        .unwrap()
        .then(
          (currentCollection) => {
            console.log(currentCollection)
            dispatch(setCurrentCollection(currentCollection));
            const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
            dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
            dispatch(setFiltersList(filtersOfCollection)); 


          },
          (error) => {
            alert('something went wrongwith GET current COLLECTION')
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    }
}    
