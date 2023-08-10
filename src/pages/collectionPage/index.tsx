import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AddNewCollectionItemButton } from "../../components/atoms/addNewCollectionItemButton";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import { getAccountStatusSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReducer";
import './style.scss';

export const CollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const currentCollection = useAppSelector(getCurrentCollectionSelector);
    return(
        <div className="collection-page--container">
            <h1 className='collection-page--caption'>
                Now you are training {currentCollection.collectionTitle} collection
            </h1>
            {accountStatus && <AddNewCollectionItemButton />}
            <div className='collection-data--container'>
                <div className='App--button__wrapper'>
                    <CheckboxList />
                </div>
                <RepeatContainer />
            </div>
        </div>
    )
}