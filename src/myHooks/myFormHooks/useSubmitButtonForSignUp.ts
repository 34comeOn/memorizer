import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { SIGN_UP_USER_ENDPOINT } from "../../constants/stringConstants";
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
    const [getAllUserDataAfterSignUpTriger] = collectionDataAPI.usePostNewUserMutation();

    return (values: IsignInForm) => {
        const newUserObject = {
            email: values.email,
            password: values.password,
            userName: values.userName,
            subscription: 'none',
            currentToken: 'none',
            currentCollection: 'none',
            userCollectionsData: [],
        }

        getAllUserDataAfterSignUpTriger({path:SIGN_UP_USER_ENDPOINT, putObj: newUserObject})
        .unwrap()
        .then(
          (userData) => {
            dispatch(logIn({userName: userData.userName, userEmail: userData.email}));
            dispatch(setAllUserCollections(userData.userCollectionsData));
            navigate('/');
          },
          (error) => {
            error.status === 400? alert('User with such e-mail already registred') : alert('Ops! something went wrong')
          }
        );
    }
}