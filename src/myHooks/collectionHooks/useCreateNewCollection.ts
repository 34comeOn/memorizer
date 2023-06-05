import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_USER } from "../../constants/stockConstants";
import { CREATE_NEW_COLLECTION_ENDPOINT, LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { hideModalWindow } from "../../store/reducers/modalWindowReduser";
import { getAllUserCollectionsState, setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { getCurrentUserEmailFromLStorage, TuserCollectionsData } from "../../utils/utils";

export interface InewCollectionForm {
    title: string, 
    collectionColor: string, 
}
export type TnewCollectionPostObject = {
    id: string, 
    newUserCollectionsData: TuserCollectionsData[], 
  }
export const useCreateNewCollection = () => {
    const dispatch = useAppDispatch();
    const currentUserCollections = useAppSelector(getAllUserCollectionsState);
    const [getAllCollectionsAfterCreatingOneNewTriger] = collectionDataAPI.usePostNewCollectionMutation();
    
    return (values: InewCollectionForm) => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const currentUserId = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_ID)?? JSON.stringify(STOCK_USER.email)


        const newCollection: TuserCollectionsData = {
            collectionId: nanoid(),
            collectionColor: values.collectionColor,
            collectionImage: 'none',
            collectionTitle: values.title,
            collectionAdminList: [currentUserEmailFromLStorage],
            collectionСategories: [],
            collectionTags: [],
            collectionData: [],
        };

        const newUserCollectionsData = [...currentUserCollections, newCollection];
        const newCollectionObj = {
            id: currentUserId,
            newUserCollectionsData: newUserCollectionsData,
        }

        getAllCollectionsAfterCreatingOneNewTriger({path:CREATE_NEW_COLLECTION_ENDPOINT, newCollectionObj: newCollectionObj})
        .unwrap()
        .then(
          (userCollections) => {
            console.log(userCollections)
            dispatch(setAllUserCollections(userCollections));
            dispatch(hideModalWindow());
          },
          (error) => {
            alert('something went wrong NEW COLLECTION')
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    }
}