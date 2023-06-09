import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logOut } from "../store/reducers/accountReduser";
import { removeRepeatGroups } from "../store/reducers/collectionGroupsReduser";
import { removeUserBasicCollectionsInfo } from "../store/reducers/userCollectionsReduser";

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