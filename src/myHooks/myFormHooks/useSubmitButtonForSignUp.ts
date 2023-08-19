import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT, SIGN_UP_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
// import { logIn } from "../../store/reducers/accountReducer";
// import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
// import { cutBasicUserCollectionsInfo } from "../../utils/utils";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const UseSubmitButtonToSignUp = (onChangeLoadingStatus: (value: boolean)=> void, openSignUpNotification: ((descriptionText: string) => void)) => {
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [getAllUserDataAfterSignUpTriger] = collectionDataAPI.usePostNewUserMutation();

    return (values: IsignInForm) => {
        const newUserObject = {
            email: values.email,
            password: values.password,
            userName: values.userName,
            isActivated: false,
            activationLink: '',
            subscription: 'none',
            currentToken: 'none',
            currentCollection: 'none',
            userCollectionsData: [],
        }

        onChangeLoadingStatus(true);

        getAllUserDataAfterSignUpTriger({path:SIGN_UP_USER_ENDPOINT, putObj: newUserObject})
        .unwrap()
        .then(
          (userData) => {
            onChangeLoadingStatus(false);
            // dispatch(logIn({userName: userData.userName, userEmail: userData.email, userId: userData._id || ' '}));
            // dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userData.userCollectionsData)));
            navigate('/');
          },
          (error) => {
            if (error.status === 400) {
              openSignUpNotification(RESPONSE_ERROR_TEXT.EMAIL_ALREADY_EXIST)
            } else {
              openSignUpNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
          }
        );
    }
}