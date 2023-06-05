import { useAppDispatch } from "../../app/hooks";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { getAllCurrentUserData, getCurrentUserEmailFromLStorage, TuserCollectionsData } from "../../utils/utils";

export const useDeleteCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();
    return () => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);

        const newUserCollectionsData = allCurrentUserData.userCollectionsData.filter((item: TuserCollectionsData) => item.collectionId !== collectionId)
        const newAllUserData = {...allCurrentUserData, userCollectionsData: newUserCollectionsData};
        localStorage.setItem(currentUserEmailFromLStorage, JSON.stringify(newAllUserData))
        dispatch(setAllUserCollections(newUserCollectionsData));
    }
}