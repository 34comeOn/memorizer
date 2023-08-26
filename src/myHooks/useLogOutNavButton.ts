import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { GET_LOGOUT, RESPONSE_ERROR_TEXT } from "../constants/stringConstants";
import { collectionDataAPI } from "../RTKApi/collectionDataApi";
import { logOut } from "../store/reducers/accountReducer";
import { removeRepeatGroups } from "../store/reducers/collectionGroupsReducer";
import { removeUserBasicCollectionsInfo } from "../store/reducers/userCollectionsReducer";

export const useLogOutNavButton = (onChangeLoadingStatus: (value: boolean)=> void, openDoneNotification: ((descriptionText: string) => void)) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [getLogOutTriger] = collectionDataAPI.useLogOutMutation();

    return () => {
        onChangeLoadingStatus(true)
        getLogOutTriger(GET_LOGOUT)
        .unwrap()
        .then(
          () => {
            onChangeLoadingStatus(false);
            dispatch(logOut());
            dispatch(removeUserBasicCollectionsInfo());
            dispatch(removeRepeatGroups());
            navigate('/');
          },
          () => {
            onChangeLoadingStatus(false)
            openDoneNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
          }
        )
    }
}