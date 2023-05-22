import { useAppDispatch } from "../app/hooks"
import { hideCurrentCard } from "../store/reducers/cardWindowReduser";


export const useCloseClickButton = () => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(hideCurrentCard())
    }
}