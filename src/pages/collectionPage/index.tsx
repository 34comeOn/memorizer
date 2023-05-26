import React from "react";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { CardWindow } from "../../components/organizms/card";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import './style.scss';

export const CollectionPage = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1 className='collection-page--caption'>
                Training collection...
            </h1>
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