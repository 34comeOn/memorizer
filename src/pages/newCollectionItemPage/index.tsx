import React from "react";
import './style.scss';
import { useAppSelector } from "../../app/hooks";
import { getAccountStatusSelector } from "../../store/reducers/accountReduser";
import { NewCollectionItemForm } from "../../components/organizms/newCollectionItemForm";

export const NewCollectionItemPage = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    return(
        <>
          {accountStatus && <NewCollectionItemForm />}
        </>
    )
}