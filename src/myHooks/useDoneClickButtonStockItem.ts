import { useAppDispatch } from "../app/hooks";
import { setTrainedCardId } from "../store/reducers/cardWindowReducer";
import { hideModalWindow, removeContentFromModalWindow } from "../store/reducers/modalWindowReducer";
import { makeOverlayProgress, TcollectionItemData } from "../utils/utils";

export const useDoneClickButtonStockItem = (currentCard: TcollectionItemData, currentCollectionId: string) => {
    const dispatch = useAppDispatch();  
    return () => {
        dispatch(setTrainedCardId(currentCard._id || ''))
        dispatch(removeContentFromModalWindow()); 
        dispatch(hideModalWindow()); 

        makeOverlayProgress(currentCollectionId, currentCard._id?? '');
    }
}