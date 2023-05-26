import { Tdispatch } from "../../constants/stockConstants";
import { logIn } from "../../store/reducers/accountReduser";
import { setAllUserCollections } from "../../store/reducers/userCollectionsReduser";
import { getAllCurrentUserData, modifyUserSignUpInfoForDataBase } from "../../utils/utils";
import { IsignInForm } from "./useSubmitButtonForSignUp";


export const submitWithLocalStorage = (values: IsignInForm, dispatch: Tdispatch) => {
    let successLStorageSubmit = false;
    let LStorageSubmitError = '';
    
    if (localStorage.getItem(values.email)) {
        LStorageSubmitError = 'User with such e-mail address is already registred!';
    } else {
        localStorage.setItem(values.email, JSON.stringify(modifyUserSignUpInfoForDataBase(values)));
        const allCurrentUserData = getAllCurrentUserData(values.email);
        
        dispatch(logIn(allCurrentUserData.name));
        dispatch(logIn({accountUserName: allCurrentUserData.name, userEmail: allCurrentUserData.email}));
        dispatch(setAllUserCollections(allCurrentUserData.userCollectionsData));

        successLStorageSubmit = true;
    }
    
    return {
        successLStorageSubmit,
        LStorageSubmitError
    };
}