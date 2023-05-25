import { STOCK_USER, Tdispatch } from "../../constants/stockConstants";
import { logIn } from "../../store/reducers/accountReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { modifyUserSignUpInfoForDataBase } from "../../utils/utils";
import { IsignInForm } from "./useSubmitButtonForSignUp";


export const submitWithLocalStorage = (values: IsignInForm, dispatch: Tdispatch) => {
    let successLStorageSubmit = false;
    let LStorageSubmitError = '';
    
    if (localStorage.getItem(values.email)) {
        LStorageSubmitError = 'User with such e-mail address is already registred!';
    } else {
        localStorage.setItem(values.email, JSON.stringify(modifyUserSignUpInfoForDataBase(values)));
        const currentUser = JSON.parse(localStorage.getItem(values.email)?? JSON.stringify(STOCK_USER));
        dispatch(logIn(currentUser.name));
        dispatch(logIn({accountUserName: currentUser.name, userEmail: currentUser.email}));
        dispatch(setAllUserCollections(currentUser.userCollectionsData));
        
        successLStorageSubmit = true;
    }
    
    return {
        successLStorageSubmit,
        LStorageSubmitError
    };
}