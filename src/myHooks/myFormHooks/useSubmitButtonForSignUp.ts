import { useNavigate } from "react-router-dom";
import { RESPONSE_ERROR_TEXT, SIGN_UP_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const UseSubmitButtonToSignUp = (onChangeLoadingStatus: (value: boolean)=> void, openSignUpNotification: ((descriptionText: string) => void)) => {
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
          (aceessToken) => {
            console.log(aceessToken)
            onChangeLoadingStatus(false);
            navigate('/');
          },
          (error) => {
            if (error.status === 400) {
              openSignUpNotification(RESPONSE_ERROR_TEXT.EMAIL_ALREADY_EXIST)
            } else {
              openSignUpNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
          }
        )
    }
}