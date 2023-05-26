import React from "react";
import './style.scss';
import { MainPageMenu } from "../../components/organizms/mainPageMenu";

export const MainPage = () => {
    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                Welcome to Memorizer
            </h1>
            <MainPageMenu />
        </div>
    )
}