import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { submitWithLocalStorage } from "./submitWithLocalStorage";

export interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const UseSubmitButtonToSignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (values: IsignInForm) => {
        const { successLStorageSubmit, LStorageSubmitError} = submitWithLocalStorage(values, dispatch);
        successLStorageSubmit? navigate('/'): alert(LStorageSubmitError);
    }
}