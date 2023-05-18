import React from "react";
import { MenuButton } from "../../components/atoms/menuButton";
import './style.css';

export const MainPage = () => {
    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                Welcome to Memorizer
            </h1>
            <div className='menu-options--box'>
                <MenuButton path='/collection' color='#62D0DF'>
                    Train collection
                </MenuButton>
                <MenuButton path='/new_collection' color='#0052C1'>
                    Create a new collection
                </MenuButton>
            </div>
        </div>
    )
}