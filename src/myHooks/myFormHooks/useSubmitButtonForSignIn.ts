import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { SIGN_IN_USER_ENDPOINT } from "../../constants/stringConstants";
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
            dispatch(logIn({userName: userData.userName, userEmail: userData.email,userId: userData._id || ' '}));
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userData.userCollectionsData)));
            navigate('/');
          },
          (error) => {
            error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    };
};