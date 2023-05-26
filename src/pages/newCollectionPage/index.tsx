import React from "react";
import './style.scss';
import { NewCollectionForm } from "../../components/organizms/newCollectionForm";
import { useAppSelector } from "../../app/hooks";
import { getAccountStatus } from "../../store/reducers/accountReduser";

export const NewCollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatus);
    return(
        <>
          {accountStatus && <NewCollectionForm />}
        </>
    )
}