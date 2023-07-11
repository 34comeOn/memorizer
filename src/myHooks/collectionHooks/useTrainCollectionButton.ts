import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { hideCurrentCard } from "../../store/reducers/cardWindowReduser";
import { UseChooseCollectionResponse } from "./useResponses/useChooseCollectionResponse";

export const useTrainCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const [currentCollectionTriger] = collectionDataAPI.useGetCurrentCollectionToTrainMutation();
    const navigate = useNavigate();
    return () => {
        dispatch(hideCurrentCard());
        currentCollectionTriger(`/:${collectionId}/:${currentUserId}`)
        .unwrap()
        .then(
          (currentCollection) => {
            UseChooseCollectionResponse(currentCollection, dispatch)
          },
          (error) => {
            alert('something went wrongwith GET current COLLECTION')
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        )
        .then(()=> navigate('/collection'))
    }
}    
