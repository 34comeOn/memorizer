import { useAppDispatch } from "../app/hooks"
import { hideModalWindow, removeContentFromModalWindow } from "../store/reducers/modalWindowReduser";

export const useCloseModalWindowButton = () => {
    const dispatch = useAppDispatch();
    return () => {
        dispatch(hideModalWindow());
        dispatch(removeContentFromModalWindow());
    }
}