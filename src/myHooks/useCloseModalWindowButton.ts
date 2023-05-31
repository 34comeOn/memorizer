import { useAppDispatch } from "../app/hooks"
import { hideModalWindow } from "../store/reducers/modalWindowReduser";

export const useCloseModalWindowButton = () => {
    const dispatch = useAppDispatch();
    return () => {
        dispatch(hideModalWindow());
    }
}