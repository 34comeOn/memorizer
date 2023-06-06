import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CREATE_NEW_COLLECTION_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserEmailSelector, getUserIdSelector } from "../../store/reducers/accountReduser";
import { hideModalWindow } from "../../store/reducers/modalWindowReduser";
import { getAllUserCollectionsSelector, setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { TuserCollectionsData } from "../../utils/utils";

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
    const currentUserCollections = useAppSelector(getAllUserCollectionsSelector);
    const [getAllCollectionsAfterCreatingOneNewTriger] = collectionDataAPI.usePostNewCollectionMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    const currentUserEmail = useAppSelector(getUserEmailSelector);
    
    return (values: InewCollectionForm) => {

        const newCollection: TuserCollectionsData = {
            collectionId: nanoid(),
            collectionColor: values.collectionColor,
            collectionImage: 'none',
            collectionTitle: values.title,
            collectionAdminList: [currentUserEmail],
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