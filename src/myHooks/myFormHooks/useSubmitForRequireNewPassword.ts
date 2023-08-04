// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../app/hooks";
// import { SIGN_UP_USER_ENDPOINT } from "../../constants/stringConstants";
// import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
// import { logIn } from "../../store/reducers/accountReducer";
// import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
// import { cutBasicUserCollectionsInfo } from "../../utils/utils";

export interface IforgotPasswordForm {
    email: string, 
}

export const UseSubmitForRequireNewPassword = () => {
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    // const [getAllUserDataAfterSignUpTriger] = collectionDataAPI.usePostNewUserMutation();

    return (values: IforgotPasswordForm) => {
        // const newUserObject = {
        //     email: values.email,
        // }

        // getAllUserDataAfterSignUpTriger({path:SIGN_UP_USER_ENDPOINT, putObj: newUserObject})
        // .unwrap()
        // .then(
        //   (userData) => {
        //     dispatch(logIn({userName: userData.userName, userEmail: userData.email, userId: userData._id || ' '}));
        //     dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userData.userCollectionsData)));
        //     navigate('/');
        //   },
        //   (error) => {
        //     error.status === 400? alert('User with such e-mail already registred') : alert('Ops! something went wrong')
        //   }
        // );
    }
}