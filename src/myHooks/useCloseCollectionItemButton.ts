import { useAppDispatch } from "../app/hooks"
import { hideCurrentCard } from "../store/reducers/cardWindowReducer";


export const useCloseCollectionItemButton = () => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(hideCurrentCard())
    }
}