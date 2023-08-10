import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CREATE_NEW_COLLECTION_ENDPOINT, RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserEmailSelector, getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideModalWindow } from "../../store/reducers/modalWindowReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo, TuserCollectionData } from "../../utils/utils";

export interface InewCollectionForm {
    title: string, 
    collectionColor: string, 
}

export type TnewCollectionPostObject = {
    id: string, 
    newUserCollectionsData: TuserCollectionData[], 
}

export const useCreateNewCollection = (onChangeLoadingStatus: (value: boolean) => void, openNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();
    const [getAllCollectionsAfterCreatingOneNewTriger] = collectionDataAPI.usePostNewCollectionMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    const currentUserEmail = useAppSelector(getUserEmailSelector);
    
    
    return (values: InewCollectionForm) => {

        const newCollection: TuserCollectionData = {
            collectionColor: values.collectionColor,
            collectionImage: 'none',
            collectionTitle: values.title,
            collectionAdminList: [currentUserEmail],
            collectionСategories: [],
            collectionTags: [],
            collectionData: [],
        };

        const newCollectionObj = {
            id: currentUserId,
            newUserCollection: newCollection,
        }
        onChangeLoadingStatus(true)

        getAllCollectionsAfterCreatingOneNewTriger({path:CREATE_NEW_COLLECTION_ENDPOINT, newCollectionObj: newCollectionObj})
        .unwrap()
        .then(
          (userCollections) => {
            onChangeLoadingStatus(false)
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollections)));
            dispatch(hideModalWindow());
          },
          (error) => {
            onChangeLoadingStatus(false);
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG);
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    }
}