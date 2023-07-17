import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logOut } from "../store/reducers/accountReducer";
import { removeRepeatGroups } from "../store/reducers/collectionGroupsReducer";
import { removeUserBasicCollectionsInfo } from "../store/reducers/userCollectionsReducer";

export const useLogOutNavButton = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    return () => {
        dispatch(logOut());
        dispatch(removeUserBasicCollectionsInfo());
        dispatch(removeRepeatGroups());
        navigate('/');
    }
}