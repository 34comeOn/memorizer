import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { SIGN_IN_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { logIn } from "../../store/reducers/accountReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string, 
};

export const UseSubmitButtonToSignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [getAllUserDataAfterSignInTriger] = collectionDataAPI.useSignInUserMutation();

    return (values: IsignInForm) => {
        const signInObject = {
            email: values.email,
            password: values.password,
        }

        getAllUserDataAfterSignInTriger({path:SIGN_IN_USER_ENDPOINT, signInObject: signInObject})
        .unwrap()
        .then(
          (userData) => {
            console.log(userData)
            dispatch(logIn({userName: userData.userName, userEmail: userData.email}));
            dispatch(setAllUserCollections(userData.userCollectionsData));
            navigate('/');
          },
          (error) => {
            error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    };
};