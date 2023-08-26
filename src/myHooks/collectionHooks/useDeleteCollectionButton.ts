import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo} from "../../utils/utils";

export const useDeleteCollectionButton = (_id: string, onChangeLoadingStatus: (value: boolean)=> void, openDeleteNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const [deleteCollectionTriger] = collectionDataAPI.useDeleteCollectionMutation();
    return () => {
        onChangeLoadingStatus(true)

        deleteCollectionTriger(`api/delete-collection/:${_id}/:${currentUserId}`)
        .unwrap()
        .then(
            (userCollectionsData) => {
                onChangeLoadingStatus(false)
                dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollectionsData)));
              },
              () => {
                onChangeLoadingStatus(false)
                openDeleteNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
              }
        )
    }
}