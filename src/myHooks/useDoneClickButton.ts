import { spreadCollectionData, Tcard } from "../utils/utils";

// const obj = {
//     id: 75,
// }

export const useDoneClickButton = (currentCard: Tcard) => {
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
            spreadCollectionData(typeof result === 'string'? JSON.parse(result): result)
            
          },
          (error) => {
            alert(error);
          }
        )
        ;

        // fetch('http://localhost:3002/api/post-question',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json;charset=utf-8'},
        //     body: JSON.stringify(obj)
        // })
    }
}