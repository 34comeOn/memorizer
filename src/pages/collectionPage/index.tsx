import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AddNewCollectionItemButton } from "../../components/atoms/addNewCollectionItemButton";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { CardWindow } from "../../components/organizms/card";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../../constants/stringConstants";
import { getAccountStatus } from "../../store/reducers/accountReduser";
import './style.scss';

export const CollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatus);
    const currentCollectionTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION)|| ``)
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 className='collection-page--caption'>
                Now you are training {currentCollectionTitle.title} collection
            </h1>
            {accountStatus && <AddNewCollectionItemButton />}
            <div className='collection-page--container'>
                <div className='App--button__wrapper'>
                <CheckboxList />
                </div>
                <RepeatContainer />
                <CardWindow />
            </div>
        </div>
    )
}