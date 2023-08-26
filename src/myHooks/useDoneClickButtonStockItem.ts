import { useAppDispatch } from "../app/hooks";
import { setTrainedCardId } from "../store/reducers/cardWindowReducer";
import { setRepeatGroupsReducer } from "../store/reducers/collectionGroupsReducer";
import { hideModalWindow, removeContentFromModalWindow } from "../store/reducers/modalWindowReducer";
import { setCurrentCollection } from "../store/reducers/userCollectionsReducer";
import { addOverlay, makeOverlayProgress, spreadCollectionData, TcollectionItemData, TuserCollectionData } from "../utils/utils";
import { useForceRender } from "./utillsHooks/useForceRender";

export const useDoneClickButtonStockItem = (currentCard: TcollectionItemData, currentCollection: TuserCollectionData) => {
    const dispatch = useAppDispatch();  
    // @ts-ignore
    const {getForceRender} =  useForceRender();

    return () => {
        
        dispatch(setTrainedCardId(currentCard._id || ''))
        dispatch(removeContentFromModalWindow()); 
        dispatch(hideModalWindow()); 
        dispatch(setCurrentCollection(addOverlay(currentCollection))); 
        const {orgonizedGroupsOfCollection}= spreadCollectionData(addOverlay(currentCollection).collectionData);
        dispatch(setRepeatGroupsReducer(orgonizedGroupsOfCollection)); 

        makeOverlayProgress(currentCollection._id?? '', currentCard._id?? '');
        getForceRender();
    }
}