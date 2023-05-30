import { useAppDispatch } from "../../app/hooks";
import { setAllUserCollections, TuserCollection } from "../../store/reducers/userCollectionsReduser";
import { getAllCurrentUserData, getCurrentUserEmailFromLStorage } from "../../utils/utils";

export const useDeleteCollectionButton = (collectionId: string) => {
    const dispatch = useAppDispatch();
    return () => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);

        const newUserCollectionsData = allCurrentUserData.userCollectionsData.filter((item: TuserCollection) => item._id !== collectionId)
        const newAllUserData = {...allCurrentUserData, userCollectionsData: newUserCollectionsData};
        localStorage.setItem(currentUserEmailFromLStorage, JSON.stringify(newAllUserData))
        dispatch(setAllUserCollections(newUserCollectionsData));
    }
}