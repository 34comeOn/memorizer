import { nanoid } from "nanoid";
import { useAppDispatch } from "../../app/hooks";
import { hideModalWindow } from "../../store/reducers/modalWindowReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { getAllCurrentUserData, getCurrentUserEmailFromLStorage } from "../../utils/utils";

export interface InewCollectionForm {
    title: string, 
    collectionColor: string, 
}

export const useCreateNewCollection = () => {
    const dispatch = useAppDispatch();
    return (values: InewCollectionForm) => {
        const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
        const allCurrentUserData = getAllCurrentUserData(currentUserEmailFromLStorage);
        
        const newCollection = {
            '_id': nanoid(),
            title: values.title,
            color: values.collectionColor,
            data: [],
            adminList: [currentUserEmailFromLStorage],
        };

        const newUserCollectionsData = [...allCurrentUserData.userCollectionsData, newCollection]
        const newAllUserData = {...allCurrentUserData, userCollectionsData: newUserCollectionsData};
        localStorage.setItem(currentUserEmailFromLStorage, JSON.stringify(newAllUserData))
        dispatch(setAllUserCollections(newUserCollectionsData));
        dispatch(hideModalWindow());
    }
}