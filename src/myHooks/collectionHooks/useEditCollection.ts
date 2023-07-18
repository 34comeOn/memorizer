import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { EDIT_COLLECTION_ENDPOINT, RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideModalWindow } from "../../store/reducers/modalWindowReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo } from "../../utils/utils";

export interface IeditCollectionForm {
    collectionColor: string, 
    title: string, 
}
export type TeditCollectionData = {
    userId: string,
    collectionId: string,
    collectionColor: string,
    collectionTitle: string,
  }
export const useEditCollection = (_id: string, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();
    const [getAllCollectionsAfterEditingCollectionTriger] = collectionDataAPI.usePutEditedCollectionMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    
    return (values: IeditCollectionForm) => {

        const editCollectionObj: TeditCollectionData = {
            userId: currentUserId,
            collectionId: _id,
            collectionColor: values.collectionColor,
            collectionTitle: values.title,
        }

        onChangeLoadingStatus(true)
        getAllCollectionsAfterEditingCollectionTriger({path:EDIT_COLLECTION_ENDPOINT, editCollectionObj: editCollectionObj})
        .unwrap()
        .then(
          (userCollections) => {
            onChangeLoadingStatus(false)
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollections)));
            dispatch(hideModalWindow());
          },
          () => {
            onChangeLoadingStatus(false)
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
          }
        );
    }
}