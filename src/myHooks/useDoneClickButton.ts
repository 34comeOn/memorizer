import { useAppDispatch } from "../app/hooks";
import { PUT_REPEATED_COLLECTION_ITEM_ENDPOINT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { hideCurrentCard } from "../store/reducers/cardWindowReduser";
import { setFiltersList } from "../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../store/reducers/collectionGroupsReduser";
import { getPunishForLatePractice, spreadCollectionData, TcollectionItemData } from "../utils/utils";

export const useDoneClickButton = (currentCard: TcollectionItemData) => {
    const currentCardPunishedForLatePractice = {...currentCard,timesBeenRepeated: getPunishForLatePractice(currentCard)};
    const dispatch = useAppDispatch();  
    const [putRepeatedCollectionItemTriger] = collectionDataAPI.usePutRepeatedCollectionItemMutation();
    
    return () => {
      putRepeatedCollectionItemTriger({path:PUT_REPEATED_COLLECTION_ITEM_ENDPOINT, putObj: currentCardPunishedForLatePractice})
      .unwrap()
      .then(
        (response) => {
          const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);
      
          dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
          dispatch(setFiltersList(filtersOfCollection)); 
        },
        (error) => {
          alert(error);
        }
      );

      dispatch(hideCurrentCard());
    }
}


// const obj = {
//     id: 75,
// }

// dispatch(hideCurrentCard());
// fetch('http://localhost:3002/api/post-question',{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json;charset=utf-8'},
//     body: JSON.stringify(obj)
// })