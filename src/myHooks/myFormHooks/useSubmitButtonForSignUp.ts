import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { POST_NEW_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { logIn } from "../../store/reducers/accountReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const UseSubmitButtonToSignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [getAllUserDataAfterSignUpTriger, postNewUsererror] = collectionDataAPI.usePostNewUserMutation();

    return (values: IsignInForm) => {

        const newUserObject2 = {
            email: values.email,
            password: values.password,
            userName: values.userName,
            subscription: 'none',
            currentToken: 'none',
            currentCollection: 'none',
            userCollectionsData: [],
        }

        getAllUserDataAfterSignUpTriger({path:POST_NEW_USER_ENDPOINT, putObj: newUserObject2})
        .unwrap()
        .then(
          (userData) => {
            dispatch(logIn({userName: userData.userName, userEmail: userData.email}));
            dispatch(setAllUserCollections(userData.userCollectionsData));
          },
          (error) => {
            alert(error);
          }
        )
        .then(()=> postNewUsererror.isError? alert('Bad thing happened while signUp') : navigate('/'));
    }
}