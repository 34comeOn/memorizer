import React from "react";
import { GetDataButton } from "../../components/atoms/getDataButton";
import { CheckboxList } from "../../components/molecules/checkboxList";
import { CardWindow } from "../../components/organizms/card";
import { Header } from "../../components/organizms/header";
import { RepeatContainer } from "../../components/organizms/repeatContainer";

export const CollectionPage = () => {
    return(
        <>
            <Header />
            <div className='App App--container'>
                <div className='App--button__wrapper'>
                <GetDataButton />
                <CheckboxList />
                </div>
                <RepeatContainer />
                <CardWindow />
            </div>
        </>
    )
}