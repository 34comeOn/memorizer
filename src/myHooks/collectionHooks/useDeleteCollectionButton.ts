import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DELETE_COLLECTION_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReduser";
import { cutBasicUserCollectionsInfo, getAllCurrentUserData, getCurrentUserEmailFromLStorage, TuserCollectionsData } from "../../utils/utils";

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
                alert('Success delete')
              },
              (error) => {
                alert('something went wrong while DELETE')
                // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
              }
        )
        // const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        // const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);

        // const newUserCollectionsData = allCurrentUserData.userCollectionsData.filter((item: TuserCollectionsData) => item._id!== collectionId)
        // const newAllUserData = {...allCurrentUserData, userCollectionsData: newUserCollectionsData};
        // localStorage.setItem(currentUserEmailFromLStorage, JSON.stringify(newAllUserData));
        // dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(newUserCollectionsData)));
    }
}