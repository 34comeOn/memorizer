import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logIn } from "../../store/reducers/accountReduser";

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
        if (localStorage.getItem(values.email)) {
            alert('User with such e-mail address is already registred!')
        } else {
            localStorage.setItem(values.email, JSON.stringify(values));
            dispatch(logIn(values.userName));
            navigate('/');
        }
    }
}