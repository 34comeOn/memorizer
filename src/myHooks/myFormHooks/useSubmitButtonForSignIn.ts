import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT, SIGN_IN_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { logIn } from "../../store/reducers/accountReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo } from "../../utils/utils";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string, 
};

export const UseSubmitButtonToSignIn = (onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [getAllUserDataAfterSignInTriger] = collectionDataAPI.useSignInUserMutation();
    
    return (values: IsignInForm) => {
        const signInObject = {
            email: values.email,
            password: values.password,
        }

        onChangeLoadingStatus(true)

        getAllUserDataAfterSignInTriger({path:SIGN_IN_USER_ENDPOINT, signInObject: signInObject})
        .unwrap()
        .then(
          (userData) => {
            onChangeLoadingStatus(false);
            dispatch(logIn({userName: userData.userName, userEmail: userData.email,userId: userData._id || ' '}));
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userData.userCollectionsData)));
            navigate('/');
          },
          (error) => {
            onChangeLoadingStatus(false)
            if (error.status === 403) {
              openNotification(RESPONSE_ERROR_TEXT.PASS_OR_EMAIL_NOT_MATCH)
            } else {
              openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
          }
        );
    };
};