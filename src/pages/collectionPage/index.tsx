import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AddNewCollectionItemButton } from "../../components/atoms/addNewCollectionItemButton";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import { getAccountStatusSelector } from "../../store/reducers/accountReduser";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReduser";
import './style.scss';

export const CollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const currentCollection = useAppSelector(getCurrentCollectionSelector);
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
            </div>
        </div>
    )
}