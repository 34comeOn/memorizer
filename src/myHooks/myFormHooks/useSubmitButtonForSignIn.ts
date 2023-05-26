import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logIn } from "../../store/reducers/accountReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { getAllCurrentUserData} from "../../utils/utils";

export interface IsignInForm {
    email: string, 
    password: string, 
}

export const UseSubmitButtonToSignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (values: IsignInForm) => {
        if (localStorage.getItem(values.email)) {
            const currentUser = JSON.parse(localStorage.getItem(values.email) || '');
            if (currentUser.password === values.password) {
                dispatch(logIn({accountUserName: currentUser.name, userEmail: currentUser.email}));
                dispatch(setAllUserCollections(getAllCurrentUserData(values.email).userCollectionsData));
                navigate('/');
            } else {
                alert('E-mail or password does not match!')
            }
        } else {
            alert('E-mail or password does not match!')
        }
    }
}