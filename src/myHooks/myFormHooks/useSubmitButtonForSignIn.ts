import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logIn } from "../../store/reducers/accountReduser";

export interface IsignInForm {
    email: string, 
    password: string, 
}

export const UseSubmitButtonToSignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (values: IsignInForm) => {
        if (localStorage.getItem(values.email)) {
            const currentUserData = JSON.parse(localStorage.getItem(values.email) || '');
            if (currentUserData.password === values.password) {
                dispatch(logIn(currentUserData.userName));
                navigate('/');
            } else {
                alert('E-mail or password does not match!')
            }
        } else {
            alert('E-mail or password does not match!')
        }
    }
}