import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo} from "../../utils/utils";

export const useDeleteCollectionButton = (_id: string) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const [deleteCollectionTriger] = collectionDataAPI.useDeleteCollectionMutation();
    return () => {
        deleteCollectionTriger(`/:${_id}/:${currentUserId}`)
        .unwrap()
        .then(
            (userCollectionsData) => {
                dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollectionsData)));
              },
              (error) => {
                alert('something went wrong while DELETE')
              }
        )
    }
}