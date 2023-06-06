import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AddNewCollectionItemButton } from "../../components/atoms/addNewCollectionItemButton";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { CardWindow } from "../../components/organizms/card";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import { getAccountStatus } from "../../store/reducers/accountReduser";
import { getCurrentCollectionState } from "../../store/reducers/userCollectionsReduser";
import './style.scss';

export const CollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatus);
    const currentCollection = useAppSelector(getCurrentCollectionState);
    console.log(currentCollection.collectionTitle)
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 className='collection-page--caption'>
                Now you are training {currentCollection.collectionTitle} collection
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