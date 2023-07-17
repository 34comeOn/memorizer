import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { EDIT_COLLECTION_ENDPOINT } from "../../constants/stringConstants";
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
export const useEditCollection = (_id: string) => {
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

        getAllCollectionsAfterEditingCollectionTriger({path:EDIT_COLLECTION_ENDPOINT, editCollectionObj: editCollectionObj})
        .unwrap()
        .then(
          (userCollections) => {
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollections)));
            dispatch(hideModalWindow());
          },
          (error) => {
            alert('something went wrong NEW COLLECTION')
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    }
}