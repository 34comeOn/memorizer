import { useAppDispatch } from "../app/hooks";
import { hideCurrentCard } from "../store/reducers/cardWindowReduser";
import { setFiltersList } from "../store/reducers/collectionFiltersReduser";
import { repeatNowGroupReduser } from "../store/reducers/collectionGroupsReduser";
import { spreadCollectionData, Tcard } from "../utils/utils";

// const obj = {
//     id: 75,
// }

export const useDoneClickButton = (currentCard: Tcard) => {
    const dispatch = useAppDispatch();  
    return () => {
        fetch('http://localhost:3002/api/repeat',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                id: currentCard['_id'],
                timesBeenRepeated: currentCard.timesBeenRepeated + 1,
                repeatedTimeStamp: Date.now(),
            })
        })
        .then(res => res.json())
        .then(
          (result) => {
            const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(result);
            dispatch(repeatNowGroupReduser(orgonizedGroupsOfCollection)); 
            dispatch(setFiltersList(filtersOfCollection)); 
          },
          (error) => {
            alert(error);
          }
        )
        ;
        dispatch(hideCurrentCard());
        // fetch('http://localhost:3002/api/post-question',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json;charset=utf-8'},
        //     body: JSON.stringify(obj)
        // })
    }
}