import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideCurrentCard } from "../../store/reducers/cardWindowReducer";
import { UseChooseCollectionResponse } from "./useResponses/useChooseCollectionResponse";

export const useChooseCollectionButton = (collectionId: string, onChangeLoadingStatus: (value: boolean)=> void ) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const [currentCollectionTriger] = collectionDataAPI.useGetCurrentCollectionToTrainMutation();
    const navigate = useNavigate();
    return () => {
        dispatch(hideCurrentCard());
        onChangeLoadingStatus(true)
        currentCollectionTriger(`choose-collection/:${collectionId}/:${currentUserId}`)
        .unwrap()
        .then(
          (currentCollection) => {
            onChangeLoadingStatus(false)
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
